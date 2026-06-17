export interface Project {
  id: number
  displayId: string
  slug: string
  year: string
  month: string
  title: string
  subtitle: string
  category: string
  description: string
  tags: string[]
  images: string[]
  mainImage: string
  links: {
    web?: string
    github?: string
  }
  requirements: string[]
  architectureImage: string
  techStack: string[]
}

export const tagStyles: Record<string, string> = {
  '.PDE': 'bg-pink-100 text-pink-700',
  '.HTML': 'bg-orange-50 text-orange-500 border border-orange-200/60',
  '.CSS': 'bg-green-50 text-green-600 border border-green-200/60',
  '.JS': 'bg-yellow-50 text-yellow-600 border border-yellow-200/60',
  '.JSX': 'bg-blue-50 text-blue-500 border border-blue-200/60',
  '.DESIGN': 'bg-purple-100 text-purple-700 border border-purple-200/60',
  '.AI': 'bg-red-100 text-red-700 border border-red-200/60',
  '.PS': 'bg-cyan-100 text-cyan-700 border border-cyan-200/60',
  '.REACT': 'bg-teal-100 text-teal-700 border border-teal-200/60',
  '.TS': 'bg-blue-200 text-blue-800 border border-blue-300/60',
  '.TW': 'bg-sky-100 text-sky-700 border border-sky-200/60',
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    displayId: '01',
    slug: 'aurora',
    year: '2017',
    month: 'Janeiro',
    title: 'Aurora',
    subtitle: 'A simple drawing application simulating mobile experience',
    category: 'app + site',
    description:
      'Esse foi o projeto da faculdade que me ensinou a pensar como uma programadora.\n\n"Como eu vou imitar uma aplicação mobile em uma linguagem que foi projetada para desenhos?"',
    tags: ['.PDE', '.HTML', '.CSS', '.JS'],
    images: [
      'https://img.usecurling.com/p/600/800?q=mobile%20app&color=purple&dpr=2',
      'https://img.usecurling.com/p/600/800?q=wireframe&color=gray&dpr=2',
      'https://img.usecurling.com/p/600/800?q=code&color=black&dpr=2',
    ],
    mainImage: 'https://img.usecurling.com/p/1200/800?q=mobile%20app&color=purple&dpr=2',
    links: { web: '#', github: '#' },
    requirements: ['Desenhar na tela', 'Trocar cores', 'Salvar imagem'],
    architectureImage: 'https://img.usecurling.com/p/800/600?q=diagram&color=gray&dpr=2',
    techStack: ['Processing', 'HTML', 'CSS'],
  },
  {
    id: 2,
    displayId: '02',
    slug: 'todo-list',
    year: '2023',
    month: 'Março',
    title: 'Todo List',
    subtitle: 'Criação de uma lista de tarefas com ReactJS.',
    category: 'web',
    description:
      'Desafio Ignite de criação de uma aplicação de controle de tarefas.\n\nFoco na componentização e estado no React.',
    tags: ['.HTML', '.CSS', '.JSX'],
    images: [
      'https://img.usecurling.com/p/800/600?q=todolist&color=blue&dpr=2',
      'https://img.usecurling.com/p/800/600?q=tasks&color=gray&dpr=2',
      'https://img.usecurling.com/p/800/600?q=react&color=black&dpr=2',
    ],
    mainImage: 'https://img.usecurling.com/p/1200/800?q=todolist&color=blue&dpr=2',
    links: { web: '#', github: '#' },
    requirements: [
      'Adição de tarefas',
      'Exclusão de tarefas',
      'Marcação de tarefa como concluída',
      'Contador de tarefas',
    ],
    architectureImage: 'https://img.usecurling.com/p/800/600?q=architecture&color=white&dpr=2',
    techStack: ['Vite', 'React', 'Phosphor'],
  },
  {
    id: 3,
    displayId: '03',
    slug: 'portfolio-v1',
    year: '2018',
    month: 'Janeiro',
    title: 'Portfolio V1',
    subtitle: 'Primeira versão do meu portfólio online',
    category: 'web',
    description: 'A primeira versão do meu site pessoal focada em performance e acessibilidade.',
    tags: ['.REACT', '.TS', '.TW'],
    images: [
      'https://img.usecurling.com/p/800/600?q=website&color=blue&dpr=2',
      'https://img.usecurling.com/p/800/600?q=browser&color=white&dpr=2',
      'https://img.usecurling.com/p/800/600?q=webdesign&color=gray&dpr=2',
    ],
    mainImage: 'https://img.usecurling.com/p/1200/800?q=website&color=blue&dpr=2',
    links: { web: '#', github: '#' },
    requirements: ['Apresentar projetos', 'Seção sobre mim', 'Formulário de contato'],
    architectureImage: 'https://img.usecurling.com/p/800/600?q=structure&color=gray&dpr=2',
    techStack: ['React', 'TypeScript', 'TailwindCSS'],
  },
]
