import { useState } from "react";
import "./Emoji.css";

type EMOJI_KEYS = "happy" | "sad" | "angry";
const EMOJI_MAP = new Map<EMOJI_KEYS, string>([
    ["happy", "😀"],
    ["sad", "😢"],
    ["angry", "😠"]
]);

export default function Emoji() {

    const [status, setStatus] = useState<EMOJI_KEYS>("sad");

    function happyClick() {
        console.log("Status:", status);
    console.log("Happy button clicked!");
    setStatus("happy");
    console.log("Status:", status);
}

  return (
    <>
        <div className="emoji">
            {EMOJI_MAP.get(status) || "unknown"}
        </div>

        <div className="acoes">
            <button onClick={happyClick}>
                BOTAO
             </button>
        </div>
    </>
);
}
