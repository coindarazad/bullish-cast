import { getFrameHtmlResponse } from "@coinbase/onchainkit";

export async function GET() {
  const frame = getFrameHtmlResponse({
    buttons: [
      { label: "Up" },
      { label: "Down" }
    ],
    image: "https://YOUR_IMAGE_URL_HERE",
    post_url: "https://YOUR_VERCEL_URL_HERE/api/frame"
  });

  return new Response(frame, {
    headers: {
      "Content-Type": "text/html"
    }
  });
}
