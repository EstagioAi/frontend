// Centraliza exportação dos ícones usados no projeto.
// Antes este arquivo estava vazio, causando erro: "does not provide an export named 'Briefcase'".
// Se em algum lugar estiver sendo importado '@/lib/icons' (ou Vite substituir), agora funcionará.

export {
	// Hero / gerais
	Sparkles,
	Search,
	MapPin,
	Briefcase,
	Star,
	// How it works / onboarding
	UserPlus2,
	Upload,
	// Navegação / menus
	Menu,
	Building2,
	HelpCircle,
	Tags,
	FileText,
	PhoneCall,
	GraduationCap,
	BookOpen,
	Shield,
	// Páginas diversas
	Mail,
	MessageCircle,
	MessageSquare,
	CheckCircle2,
	ShieldAlert,
	Filter,
	Bell,
	ShieldCheck,
	Activity,
	Users,
	PenTool,
	Code2,
	Megaphone,
	LayoutGrid,
	Eye,
	ExternalLink,
} from 'lucide-react'

// Opcional: exporta tudo (caso apareça novo ícone sem adicionar acima)
export * from 'lucide-react'
