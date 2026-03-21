"""
會議摘要機器人 2.0 (Meeting Summary Bot v2)
==========================================
支援語音轉文字 (Speech-to-Text)

風格：專業、高效、條理清晰
語言：中文為主
"""

import re
import sys
import os
from datetime import datetime
from typing import Optional

# 確保輸出編碼
if sys.platform == 'win32':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except:
        pass

class MeetingSummaryBotv2:
    """會議摘要生成機器人 v2 - 支援語音轉文字"""
    
    def __init__(self):
        self.template = {
            "重點摘要": [],
            "決策事項": [],
            "待辦事項": [],
            "後續行動": []
        }
        self.supported_audio_formats = ['.m4a', '.mp3', '.mp4', '.wav']
    
    def transcribe_audio(self, file_path: str) -> str:
        """
        語音轉文字 (Speech-to-Text)
        
        目前為模擬版本。實際串接可選：
        - OpenAI Whisper API
        - Google Cloud Speech-to-Text
        - Azure Speech Services
        - Whisper (本地模型)
        """
        if not os.path.exists(file_path):
            raise FileNotFoundError(f"找不到檔案: {file_path}")
        
        ext = os.path.splitext(file_path)[1].lower()
        if ext not in self.supported_audio_formats:
            raise ValueError(f"不支援的格式: {ext}")
        
        print(f"🎙️ 正在轉換: {file_path}")
        
        # TODO: 串接實際 STT API
        # 範例 Whisper API:
        # import openai
        # audio_file = open(file_path, "rb")
        # transcript = openai.Audio.transcribe("whisper-1", audio_file)
        # return transcript["text"]
        
        # 模擬轉換結果
        return self._simulate_transcription()
    
    def _simulate_transcription(self) -> str:
        """模擬語音轉文字結果"""
        return """1. 確認 Q2 產品路線圖
2. 決定優先開發 AI 摘要功能
3. 小明負責 UI 設計，下週完成
4. 小美負責後端開發，三天後交付
5. 確認採用新技術棧
6. 需要追蹤市場趨勢
7. 風險：時間緊迫
8. 通過預算申請"""
    
    def parse_input(self, raw_text: str) -> dict:
        """解析輸入文字，提取會議資訊"""
        lines = raw_text.strip().split('\n')
        
        info = {
            "日期": "",
            "參與者": [],
            "主題": "",
            "內容": []
        }
        
        for line in lines:
            line = line.strip()
            if not line:
                continue
            
            # 匹配日期
            if "日期" in line:
                match = re.search(r'(\d{4}[-/]\d{1,2}[-/]\d{1,2})', line)
                if match:
                    info["日期"] = match.group(1)
                continue
            
            # 匹配參與者
            if "參與者" in line or "與會者" in line or "出席" in line:
                participants = re.sub(r'[^、,\s\w]+', '', line)
                participants = re.sub(r'日期|參與者|與會者|出席|：:', '', participants)
                info["參與者"] = [p.strip() for p in re.split(r'[、,]', participants) if p.strip()]
                continue
            
            # 匹配主題
            if "主題" in line or "議題" in line:
                info["主題"] = re.sub(r'[^：:]\s*', '', line).strip()
                continue
            
            # 內容行
            info["內容"].append(line)
        
        return info
    
    def generate_summary(self, 
                         date: str, 
                         participants: list, 
                         topic: str, 
                         content: list) -> str:
        """生成會議摘要"""
        
        full_content = '\n'.join(content)
        
        key_points = self._extract_key_points(full_content)
        decisions = self._extract_decisions(full_content)
        action_items = self._extract_action_items(full_content)
        follow_ups = self._extract_follow_ups(full_content)
        
        output = f"""{'='*50}
📋 會議摘要 (v2.0)
{'='*50}

📅 日期：{date}
👥 參與者：{', '.join(participants)}
📌 主題：{topic}

{'─'*50}

🎯 重點摘要
{'─'*50}
"""
        
        for i, point in enumerate(key_points, 1):
            output += f"{i}. {point}\n"
        
        output += f"""
{'─'*50}

✅ 決策事項
{'─'*50}
"""
        
        if decisions:
            output += "| 項目 | 決定 | 負責人 |\n"
            output += "|------|------|--------|\n"
            for d in decisions:
                output += f"| {d.get('項目', '-')} | {d.get('決定', '-')} | {d.get('負責人', '-')} |\n"
        else:
            output += "（無）\n"
        
        output += f"""
{'─'*50}

📌 待辦事項
{'─'*50}
"""
        
        if action_items:
            output += "| 事項 | 負責人 | 期限 |\n"
            output += "|------|--------|------|\n"
            for a in action_items:
                output += f"| {a.get('事項', '-')} | {a.get('負責人', '-')} | {a.get('期限', '-')} |\n"
        else:
            output += "（無）\n"
        
        output += f"""
{'─'*50}

🔭 後續行動
{'─'*50}
"""
        
        for i, f in enumerate(follow_ups, 1):
            output += f"{i}. {f}\n"
        
        output += f"""
{'='*50}
🤖 會議摘要機器人 v2.0
生成時間：{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
"""
        
        return output
    
    def _extract_key_points(self, content: str) -> list:
        sentences = re.split(r'[。！？\n]', content)
        keywords = ["重要", "決定", "確認", "通過", "問題", "風險", "目標", "策略", "優先"]
        
        key_points = []
        for sent in sentences:
            sent = sent.strip()
            if len(sent) > 10 and any(k in sent for k in keywords):
                key_points.append(sent)
        
        return key_points[:5] if key_points else ["（請手動輸入重點）"]
    
    def _extract_decisions(self, content: str) -> list:
        decisions = []
        lines = content.split('\n')
        
        for line in lines:
            if any(k in line for k in ["決定", "通過", "同意", "確認"]):
                decisions.append({
                    "項目": line.strip(),
                    "決定": "通過",
                    "負責人": "-"
                })
        
        return decisions[:5]
    
    def _extract_action_items(self, content: str) -> list:
        action_items = []
        lines = content.split('\n')
        
        for line in lines:
            if any(k in line for k in ["待辦", "執行", "完成", "負責", "期限", "TODO"]):
                owner_match = re.search(r'[\(（](\w+)[\)）]|\b(\w+)負責', line)
                deadline_match = re.search(r'\d{1,2}[-/]\d{1,2}|\d+天', line)
                
                owner = owner_match.group(1) or owner_match.group(2) or "-" if owner_match else "-"
                deadline = deadline_match.group(0) if deadline_match else "-"
                
                action_items.append({
                    "事項": line.strip(),
                    "負責人": owner,
                    "期限": deadline
                })
        
        return action_items[:5]
    
    def _extract_follow_ups(self, content: str) -> list:
        follow_ups = []
        lines = content.split('\n')
        
        for line in lines:
            if any(k in line for k in ["後續", "下一步", "未來", "展望", "追蹤"]):
                follow_ups.append(line.strip())
        
        return follow_ups[:3] if follow_ups else ["持續追蹤相關進展"]


def demo():
    """演示用法"""
    
    # 範例輸入（文字）
    sample_input = """
日期：2026/03/18
參與者：小明、小美、老闆
主題：Q2 產品開發會議

會議內容：
1. 確認 Q2 產品路線圖
2. 決定優先開發 AI 摘要功能
3. 小明負責 UI 設計，下週完成
4. 小美負責後端開發，三天後交付
5. 確認採用新技術棧
6. 需要追蹤市場趨勢
7. 風險：時間緊迫
8. 通過預算申請
    """
    
    bot = MeetingSummaryBotv2()
    info = bot.parse_input(sample_input)
    
    summary = bot.generate_summary(
        date=info["日期"],
        participants=info["參與者"],
        topic=info["主題"],
        content=info["內容"]
    )
    
    print(summary)
    print("\n" + "="*50)
    print("📌 使用語音轉文字:")
    print("   bot = MeetingSummaryBotv2()")
    print("   text = bot.transcribe_audio('meeting.m4a')")
    print("="*50)


if __name__ == "__main__":
    demo()
