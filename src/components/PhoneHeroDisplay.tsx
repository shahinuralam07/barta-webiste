import { useEffect, useState } from 'react';
import { Lock } from 'lucide-react';

const PHONE_SCREENSHOT_SRC =
  '/assets/aistudio/Dark_Messaging_App_with_British_Contacts_63a0a0b0.png';

function formatCurrentTime(): string {
  return new Date().toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
    hour12: false,
  });
}

export function PhoneHeroDisplay() {
  const [timeText, setTimeText] = useState<string>(formatCurrentTime);
  const [islandExpanded, setIslandExpanded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeText(formatCurrentTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="barta-iphone" aria-label="Barta mobile preview phone">
        <div className="barta-volume barta-volume-one" aria-hidden="true" />
        <div className="barta-volume barta-volume-two" aria-hidden="true" />
        <div className="barta-power-button" aria-hidden="true" />

        <div className="barta-iphone-screen">
          {/* Status Bar */}
          <div className="barta-status-bar">
            <span className="font-mono-tech">{timeText}</span>
            <div className="flex items-center gap-1.5 text-[11px]" aria-hidden="true">
              <span className="tracking-tighter">•••</span>
              <span>⌁</span>
              <div className="barta-battery" />
            </div>
          </div>

          {/* Interactive Dynamic Island */}
          <button
            type="button"
            onClick={() => setIslandExpanded((prev) => !prev)}
            aria-expanded={islandExpanded}
            aria-label="Toggle Dynamic Island"
            className={`barta-dynamic-island ${
              islandExpanded ? 'barta-dynamic-island-expanded' : ''
            }`}
          >
            {islandExpanded && (
              <span className="flex items-center gap-1.5 pr-5 text-[11px] font-medium text-white whitespace-nowrap">
                <Lock className="w-3 h-3 text-[#60A5FA]" aria-hidden="true" />
                Barta Private Session
              </span>
            )}
            <span className="barta-island-camera" aria-hidden="true" />
          </button>

          {/* OLED Display Content with Barta App Screenshot */}
          <div className="flex-1 min-h-0 bg-black pb-4 overflow-hidden flex items-center justify-center">
            <img
              src={PHONE_SCREENSHOT_SRC}
              alt="Barta messaging app interface showing Messages list, filter tabs, and bottom navigation"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain object-top select-none"
            />
          </div>

          <div className="barta-home-indicator" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
