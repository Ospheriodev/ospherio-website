import { RenamedProject, renamedMetadata, type Rename } from "@/components/RenamedProject";

const RENAME: Rename = { was: "Voice Khata", name: "VoiceLedger", to: "/work/voice-ledger/" };

export const metadata = renamedMetadata(RENAME);

export default function VoiceKhataRenamed() {
  return <RenamedProject {...RENAME} />;
}
