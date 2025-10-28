import { Meta } from "@once-ui-system/core";

export async function generateMetadata() {
  return Meta.generate({
    title: "Figma 设计 - Once UI Design System",
    description: "Once UI 官方设计系统",
    baseURL: "https://your-domain.vercel.app",
    path: "/figma-design",
  });
}

export default function FigmaDesign() {
  return (
    <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0 }}>
      <iframe
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FzlopxMxPXOa0m8SR1V67b4%2FOnce-UI-Official-Design-System--v3.4---Community-%3Fnode-id%3D10202-183497%26m%3Ddev"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        style={{ border: 0 }}
      />
    </div>
  );
}

