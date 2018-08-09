import Preset from "./Preset";

export default function configure(config) {
  const preset = new Preset(config).install();
}
