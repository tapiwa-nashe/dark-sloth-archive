import Link from "next/link";

export default function PlatformFeatureGate({ feature, description }: { feature: string; description: string }) {
  return (
    <section className="record-platform-gate" aria-label={`${feature} participation access`}>
      <div>
        <p className="record-feature-kicker">PARTICIPANT FEATURE / PLATFORM ACCESS</p>
        <h2>{feature}</h2>
        <p>{description}</p>
        <small>You can continue reading and inspecting this public record without installing anything. The Platform is only required for this participation action.</small>
      </div>
      <Link href="/platform">Explore the Archive Platform <span aria-hidden="true">↗</span></Link>
    </section>
  );
}
