import { createSignal } from "solid-js";

type ClickableImageProps = {
  src: string;
  alt: string;
  thumbSrc?: string;
  width?: number;
  height?: number;
};

export function ClickableImage({ src, alt, thumbSrc, width, height }: ClickableImageProps) {
  const [isImageModalOpen, setIsImageModalOpen] = createSignal(false);
  const hasFixedSize = width !== undefined && height !== undefined;
  const displaySrc = thumbSrc || src;

  return (
    <>
      <button onClick={() => setIsImageModalOpen(true)} class={hasFixedSize ? "" : "w-full"}>
        <img
          src={displaySrc}
          alt={alt}
          width={width}
          height={height}
          class={`rounded-lg hover:opacity-90 transition-opacity ${hasFixedSize ? "" : "w-full"}`}
          loading="lazy"
        />
      </button>

      <div
        class={`fixed inset-0 z-50 bg-black/90 ${
          isImageModalOpen() ? "flex" : "hidden"
        }`}
      >
        <button
          class="w-full h-full flex flex-col justify-center items-center gap-4 p-4"
          onClick={() => setIsImageModalOpen(false)}
        >
          <img
            src={src}
            alt={alt}
            class="max-w-full max-h-[85vh] object-contain"
          />
          <span class="underline text-white">close</span>
        </button>
      </div>
    </>
  );
}
