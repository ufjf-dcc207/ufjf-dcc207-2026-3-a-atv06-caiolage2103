import "./Emoji.css";

type EMOJI_KEYS = "happy" | "sad" | "angry";
const EMOJI_MAP = new Map<EMOJI_KEYS, string>([
    ["happy", "😀"],
    ["sad", "😢"],
    ["angry", "😠"]
]);

export default function Emoji() {
  return (
    <div className="emoji">
        {EMOJI_MAP.get("happy")}
        {EMOJI_MAP.get("sad")}
        {EMOJI_MAP.get("angry")}
    </div>
);
}
