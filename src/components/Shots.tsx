import { pathTo } from "@/lib/site";

type Shot = { src: string; alt: string; width: number; height: number };

/**
 * GoodsHaul screens, framed. These are design previews rendered with sample
 * data, so anything that shows them should say so (see `.gh-note`).
 */
export const shots = {
  orderDesktop: {
    src: "/media/goodshaul/order-desktop.webp",
    alt: "GoodsHaul order screen: an order awaiting office review, with a short-stock warning, the order total and the customer's credit position",
    width: 1600,
    height: 1362,
  },
  orderPhone: {
    src: "/media/goodshaul/order-phone.webp",
    alt: "The same GoodsHaul order at phone width",
    width: 640,
    height: 1312,
  },
  stockDesktop: {
    src: "/media/goodshaul/stock-desktop.webp",
    alt: "GoodsHaul stock levels: on hand, committed and available for each product, with short-stock and no-stock flags",
    width: 1600,
    height: 1258,
  },
  stockPhone: {
    src: "/media/goodshaul/stock-phone.webp",
    alt: "GoodsHaul stock levels at phone width",
    width: 640,
    height: 1312,
  },
} satisfies Record<string, Shot>;

/** A desktop screen in a browser frame, optionally with a phone-width screen overlapping it. */
export function ScreenPair({
  desktop,
  phone,
  eager = false,
  flip = false,
}: {
  desktop: Shot;
  phone?: Shot;
  eager?: boolean;
  flip?: boolean;
}) {
  return (
    <div className={"gh-pair" + (phone ? " has-phone" : "") + (flip ? " is-flip" : "")}>
      <div className="gh-browser">
        <div className="gh-browser-bar" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <img
          src={pathTo(desktop.src)}
          alt={desktop.alt}
          width={desktop.width}
          height={desktop.height}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : undefined}
          decoding="async"
        />
      </div>
      {phone && (
        <div className="gh-phone">
          <img
            src={pathTo(phone.src)}
            alt={phone.alt}
            width={phone.width}
            height={phone.height}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
          />
        </div>
      )}
    </div>
  );
}
