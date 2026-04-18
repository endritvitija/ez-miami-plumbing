import { Icon } from "./Icon";

type Props = {
  phone: string;
  phoneHref: string;
  email: string;
};

export function StickyCallBar({ phone, phoneHref, email }: Props) {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 pb-[env(safe-area-inset-bottom)]">
      <div className="mx-3 mb-3 rounded-2xl bg-surface-2/95 backdrop-blur border border-border shadow-cta flex overflow-hidden">
        <a
          href={phoneHref}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-accent hover:bg-accent-dark text-black font-bold"
          aria-label={`Call ${phone}`}
        >
          <Icon name="phone" className="w-5 h-5" />
          <span>Call {phone}</span>
        </a>
        <a
          href={`mailto:${email}`}
          className="w-14 flex items-center justify-center text-fg border-l border-border"
          aria-label="Email us"
        >
          <Icon name="mail" className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
