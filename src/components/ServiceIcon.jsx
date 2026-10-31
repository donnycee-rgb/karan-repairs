import {
  Smartphone, Battery, Plug, Droplets, Camera, Volume2, Cpu, Layers,
  ShieldCheck, Clock, BadgeCheck, Tag,
} from 'lucide-react'

const icons = {
  smartphone: Smartphone,
  battery: Battery,
  plug: Plug,
  droplets: Droplets,
  camera: Camera,
  volume: Volume2,
  cpu: Cpu,
  layers: Layers,
  shield: ShieldCheck,
  clock: Clock,
  badge: BadgeCheck,
  tag: Tag,
}

export default function ServiceIcon({ name, size = 24 }) {
  const Icon = icons[name] ?? Smartphone
  return (
    <span className="icon-box">
      <Icon size={size} strokeWidth={2} />
    </span>
  )
}
