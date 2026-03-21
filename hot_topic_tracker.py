"""
熱點追蹤機器人 (Hot Topic Tracker)
===================================
自動追蹤 AI 趨勢、科技產業熱點

功能：
- RSS 聚合 NewsAPI
- 關鍵字監控
- 每日 09:00 早報（5 條精選）
- 卡片式輸出
"""

# import feedparser  # 需要 pip install feedparser
# import requests     # 需要 pip install requests
import sys
import sys
import json
import re
from datetime import datetime, timedelta
from typing import List, Optional

# 設定 UTF-8 輸出
if sys.platform == 'win32':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except:
        pass

# 檢查可選依賴
try:
    import feedparser
    HAS_FEEDPARSER = True
except ImportError:
    HAS_FEEDPARSER = False

try:
    import requests
    HAS_REQUESTS = True
except ImportError:
    HAS_REQUESTS = False

class HotTopicTracker:
    """熱點追蹤機器人"""
    
    def __init__(self, api_key: str = None):
        self.api_key = api_key
        self.categories = ["AI", "科技", "技術"]
        
        # RSS 來源
        self.rss_sources = [
            {
                "name": "TechCrunch",
                "url": "https://techcrunch.com/feed/",
                "keywords": ["AI", "artificial intelligence", "machine learning"]
            },
            {
                "name": "The Verge",
                "url": "https://www.theverge.com/rss/index.xml",
                "keywords": ["AI", "tech", "technology"]
            },
            {
                "name": "Wired",
                "url": "https://www.wired.com/feed/rss",
                "keywords": ["AI", "artificial intelligence"]
            },
            {
                "name": "MIT Technology Review",
                "url": "https://www.technologyreview.com/feed/",
                "keywords": ["AI", "artificial intelligence"]
            }
        ]
        
        # NewsAPI 關鍵字
        self.keywords = [
            "artificial intelligence", "AI", "machine learning",
            "deep learning", "neural network", "OpenAI", "Google AI", "Meta AI",
            "technology", "tech", "innovation"
        ]
    
    def fetch_rss(self, source: dict, limit: int = 10) -> List[dict]:
        """抓取 RSS 來源"""
        # 如果沒有 feedparser，返回空列表
        if not HAS_FEEDPARSER:
            # print("Warning: feedparser not installed, using sample data")
            return []
            
        try:
            feed = feedparser.parse(source["url"])
            
            articles = []
            for entry in feed.entries[:limit]:
                title = entry.get("title", "")
                summary = entry.get("summary", "")
                link = entry.get("link", "")
                published = entry.get("published", "")
                
                # 清理 HTML 標籤
                summary = re.sub(r'<[^>]+>', '', summary)
                summary = summary[:200] + "..." if len(summary) > 200 else summary
                
                # 檢查關鍵字
                content = (title + " " + summary).lower()
                if any(kw.lower() in content for kw in source["keywords"]):
                    articles.append({
                        "title": title,
                        "summary": summary,
                        "link": link,
                        "source": source["name"],
                        "published": published,
                        "tags": self._extract_tags(content)
                    })
            
            return articles
        except Exception as e:
            print(f"Error fetching {source['name']}: {e}")
            return []
    
    def fetch_newsapi(self, query: str = "AI OR technology", limit: int = 20) -> List[dict]:
        """使用 NewsAPI 抓取新聞"""
        if not self.api_key or not HAS_REQUESTS:
            return self._generate_sample_news()
        
        try:
            url = "https://newsapi.org/v2/everything"
            params = {
                "q": query,
                "apiKey": self.api_key,
                "language": "en",
                "sortBy": "publishedAt",
                "pageSize": limit
            }
            
            response = requests.get(url, params=params)
            data = response.json()
            
            articles = []
            for article in data.get("articles", []):
                articles.append({
                    "title": article.get("title", ""),
                    "summary": article.get("description", "")[:200],
                    "link": article.get("url", ""),
                    "source": article.get("source", {}).get("name", ""),
                    "published": article.get("publishedAt", ""),
                    "tags": self._extract_tags(article.get("title", "") + " " + article.get("description", ""))
                })
            
            return articles
        except Exception as e:
            print(f"NewsAPI Error: {e}")
            return self._generate_sample_news()
    
    def _generate_sample_news(self) -> List[dict]:
        """生成範例新聞（當沒有 API 時）"""
        return [
            {
                "title": "OpenAI 發布 GPT-5 引發 AI 產業新革命",
                "summary": "OpenAI 正式發布最新一代 GPT-5 模型，在推理能力和安全性方面有顯著提升...",
                "link": "https://example.com/gpt5",
                "source": "TechNews",
                "published": datetime.now().isoformat(),
                "tags": ["AI", "OpenAI", "大語言模型"]
            },
            {
                "title": "Google DeepMind 推出新一代 AlphaFold 3",
                "summary": "DeepMind 發布 AlphaFold 3，能夠預測蛋白質與其他分子的複雜互動...",
                "link": "https://example.com/alphafold",
                "source": "Science Daily",
                "published": datetime.now().isoformat(),
                "tags": ["AI", "生物科技", "DeepMind"]
            },
            {
                "title": "Meta 開源新一代 LLM Llama 4",
                "summary": "Meta 宣布開源 Llama 4 模型，引發 AI 社群熱烈討論...",
                "link": "https://example.com/llama4",
                "source": "TechCrunch",
                "published": datetime.now().isoformat(),
                "tags": ["AI", "開源", "Meta"]
            },
            {
                "title": "NVIDIA 發布最新 AI 晶片 GB200",
                "summary": "NVIDIA 推出下一代 AI 加速器 GB200，效能提升 3 倍...",
                "link": "https://example.com/gb200",
                "source": "The Verge",
                "published": datetime.now().isoformat(),
                "tags": ["AI", "硬體", "NVIDIA"]
            },
            {
                "title": "蘋果 WWDC 2026 揭示 AI 整合策略",
                "summary": "蘋果在 WWDC 上展示 AI 深度整合 iOS 的全新功能...",
                "link": "https://example.com/wwdc",
                "source": "Wired",
                "published": datetime.now().isoformat(),
                "tags": ["AI", "蘋果", "消費電子"]
            }
        ]
    
    def _extract_tags(self, content: str) -> List[str]:
        """提取標籤"""
        content = content.lower()
        tags = []
        
        tag_keywords = {
            "AI": ["ai", "artificial intelligence", "machine learning", "llm", "gpt"],
            "OpenAI": ["openai", "gpt", "chatgpt"],
            "Google": ["google", "deepmind", "gemini"],
            "Meta": ["meta", "facebook", "llama"],
            "NVIDIA": ["nvidia", "gpu", "cuda"],
            "蘋果": ["apple", "iphone", "ios", "mac"],
            "微軟": ["microsoft", "azure", "copilot"],
            "晶片": ["chip", "processor", "semiconductor"],
            "Startup": ["startup", "venture", "funding"]
        }
        
        for tag, keywords in tag_keywords.items():
            if any(kw in content for kw in keywords):
                tags.append(tag)
        
        return tags[:3]
    
    def get_daily_report(self, limit: int = 5) -> str:
        """生成每日早報"""
        
        # 抓取 RSS
        all_articles = []
        for source in self.rss_sources:
            articles = self.fetch_rss(source, limit=10)
            all_articles.extend(articles)
        
        # 抓取 NewsAPI
        newsapi_articles = self.fetch_newsapi(limit=20)
        all_articles.extend(newsapi_articles)
        
        # 去重並排序
        seen = set()
        unique_articles = []
        for article in all_articles:
            title_key = article["title"][:50].lower()
            if title_key not in seen:
                seen.add(title_key)
                unique_articles.append(article)
        
        # 取最新 5 條
        top_articles = unique_articles[:limit]
        
        # 生成報告
        report = self._format_report(top_articles)
        
        return report
    
    def _format_report(self, articles: List[dict]) -> str:
        """格式化報告"""
        
        report = f"""
╔══════════════════════════════════════════════════════════╗
║           🔥 AI & 科技熱點早報                            ║
║           {datetime.now().strftime('%Y-%m-%d %H:%M')}                           ║
╚══════════════════════════════════════════════════════════╝

🎯 今日精選 ({len(articles)} 條)

"""
        
        for i, article in enumerate(articles, 1):
            tags = " | ".join(article.get("tags", []))
            
            report += f"""
{'─'*60}
📰 【{i}】{article['title']}
{'─'*60}
📝 摘要：{article['summary']}

🏷️ 標籤：{tags}
📡 來源：{article['source']}
🔗 連結：{article['link']}

💡 為何重要：
   這則新聞關注 {article.get('tags', ['科技'])[0]} 領域的最新發展，
   對於了解產業趨勢和技術演進具有重要參考價值。

"""
        
        report += f"""
{'='*60}
🤖 熱點追蹤機器人 · 每日 09:00 自動更新
"""
        
        return report
    
    def monitor_keywords(self, content: str) -> dict:
        """關鍵字監控"""
        alerts = []
        
        # 高優先級關鍵字
        high_priority = ["breakthrough", "launch", "release", "announce", "new"]
        medium_priority = ["update", "improve", "upgrade", "feature"]
        
        content_lower = content.lower()
        
        if any(kw in content_lower for kw in high_priority):
            alerts.append({"level": "high", "message": "重大發布"})
        if any(kw in content_lower for kw in medium_priority):
            alerts.append({"level": "medium", "message": "功能更新"})
        
        return {"alerts": alerts, "timestamp": datetime.now().isoformat()}


def demo():
    """演示"""
    tracker = HotTopicTracker()
    report = tracker.get_daily_report(limit=5)
    print(report)


if __name__ == "__main__":
    demo()
