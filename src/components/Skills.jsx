// Only import icons that definitely exist
import { 
  SiReact, 
  SiNodedotjs, 
  SiNextdotjs, 
  SiMysql, 
  SiPostgresql, 
  SiDocker, 
  SiKubernetes, 
  SiGithub, 
  SiGit
} from 'react-icons/si'

// Text-based icon components (these don't use className for sizing)
const SpringBootIcon = () => <span className="text-xs font-bold">SB</span>
const JPAIcon = () => <span className="text-xs font-bold">JPA</span>
const HibernateIcon = () => <span className="text-xs font-bold">H</span>
const NextAuthIcon = () => <span className="text-xs font-bold">NA</span>
const AzureB2CIcon = () => <span className="text-xs font-bold">B2C</span>
const RESTAPIIcon = () => <span className="text-xs font-bold">API</span>
const OAuth2Icon = () => <span className="text-xs font-bold">O2</span>
const ContainerAppsIcon = () => <span className="text-xs font-bold">📦</span>
const CloudFunctionsIcon = () => <span className="text-xs font-bold">⚡</span>
const CloudRunIcon = () => <span className="text-xs font-bold">🏃</span>
const JavaIcon = () => <span className="text-xs font-bold">☕</span>
const JWTIcon = () => <span className="text-xs font-bold">JWT</span>
const MavenIcon = () => <span className="text-xs font-bold">M</span>
const AzureIcon = () => <span className="text-xs font-bold">AZ</span>
const GCPIcon = () => <span className="text-xs font-bold">GCP</span>
const JenkinsIcon = () => <span className="text-xs font-bold">J</span>
const GitHubActionsIcon = () => <span className="text-xs font-bold">⚙</span>
const IntelliJIcon = () => <span className="text-xs font-bold">💡</span>
const VSCodeIcon = () => <span className="text-xs font-bold">VS</span>
const PostmanIcon = () => <span className="text-xs font-bold">P</span>
const GrafanaIcon = () => <span className="text-xs font-bold">G</span>
const JiraIcon = () => <span className="text-xs font-bold">J</span>

// Helper to check if icon is text-based
const isTextIcon = (IconComponent) => {
  const textIcons = [
    SpringBootIcon, JPAIcon, HibernateIcon, NextAuthIcon, AzureB2CIcon,
    RESTAPIIcon, OAuth2Icon, ContainerAppsIcon, CloudFunctionsIcon,
    CloudRunIcon, JavaIcon, JWTIcon, MavenIcon, AzureIcon, GCPIcon,
    JenkinsIcon, GitHubActionsIcon, IntelliJIcon, VSCodeIcon, PostmanIcon,
    GrafanaIcon, JiraIcon
  ]
  return textIcons.includes(IconComponent)
}

// Safe icon renderer
const SafeIcon = ({ IconComponent, className, isText }) => {
  if (!IconComponent) return null
  
  if (isText) {
    return <IconComponent />
  }
  
  return <IconComponent className={className} style={{ display: 'inline-block' }} />
}

const Skills = () => {
  const skillCategories = [
    {
      category: "Frameworks / Libraries",
      skills: [
        { name: "Spring Boot", icon: SpringBootIcon, color: "text-green-400" },
        { name: "REST APIs", icon: RESTAPIIcon, color: "text-blue-400" },
        { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
        { name: "JPA", icon: JPAIcon, color: "text-purple-400" },
        { name: "Hibernate", icon: HibernateIcon, color: "text-cyan-400" },
        { name: "JWT", icon: JWTIcon, color: "text-yellow-400" },
        { name: "OAuth2", icon: OAuth2Icon, color: "text-orange-400" },
        { name: "Maven", icon: MavenIcon, color: "text-yellow-500" },
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
        { name: "React", icon: SiReact, color: "text-cyan-400" },
        { name: "NextAuth", icon: NextAuthIcon, color: "text-purple-400" },
      ]
    },
    {
      category: "Languages",
      skills: [
        { name: "Java", icon: JavaIcon, color: "text-orange-500" },
      ]
    },
    {
      category: "Cloud Technologies",
      skills: [
        { name: "Microsoft Azure", icon: AzureIcon, color: "text-blue-400" },
        { name: "Container Apps", icon: ContainerAppsIcon, color: "text-gray-300" },
        { name: "Azure B2C", icon: AzureB2CIcon, color: "text-blue-400" },
        { name: "GCP", icon: GCPIcon, color: "text-blue-500" },
        { name: "Cloud Functions", icon: CloudFunctionsIcon, color: "text-yellow-400" },
        { name: "Cloud Run", icon: CloudRunIcon, color: "text-gray-300" },
        { name: "Docker", icon: SiDocker, color: "text-blue-400" },
        { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-500" },
        { name: "GitHub Actions", icon: GitHubActionsIcon, color: "text-gray-300" },
        { name: "Jenkins", icon: JenkinsIcon, color: "text-blue-500" },
      ]
    },
    {
      category: "Developer Tools",
      skills: [
        { name: "IntelliJ IDEA", icon: IntelliJIcon, color: "text-purple-400" },
        { name: "VS Code", icon: VSCodeIcon, color: "text-blue-400" },
        { name: "Postman", icon: PostmanIcon, color: "text-orange-500" },
        { name: "Git", icon: SiGit, color: "text-orange-600" },
        { name: "GitHub", icon: SiGithub, color: "text-gray-300" },
        { name: "Grafana", icon: GrafanaIcon, color: "text-orange-400" },
        { name: "Jira", icon: JiraIcon, color: "text-blue-500" },
      ]
    }
  ]

  return (
    <section className="pt-4 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">Skills & Tools</h2>

        <div className="space-y-8">
          {skillCategories.map((category, catIdx) => (
            <div key={catIdx}>
              <h3 className="text-lg font-semibold mb-4 text-gray-400">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => {
                  const IconComponent = skill.icon
                  const isText = isTextIcon(IconComponent)
                  
                  return (
                    <div
                      key={skillIdx}
                      className="px-4 py-2.5 bg-gray-900 rounded-lg border border-gray-800 text-gray-300 flex items-center gap-2.5 hover:border-gray-700 transition-colors"
                    >
                      <span className={`${skill.color || 'text-gray-300'} flex items-center`}>
                        <SafeIcon IconComponent={IconComponent} className="w-4 h-4" isText={isText} />
                      </span>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
