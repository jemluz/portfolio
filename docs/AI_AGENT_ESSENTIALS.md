# AI Agent Essentials - turma.dev

> **Documentação concisa e essencial para agentes de IA - Tudo que você precisa saber em ~400 linhas**

## 🎯 O que é este projeto?

**turma.dev** = Portfolio interativo Next.js 15 com timeline de carreira profissional (1997-2025)

**Stack**: Next.js 15 + React 19 + TypeScript 5 + TailwindCSS v4 + Radix UI

## 📂 Estrutura Essencial

```
src/
├── app/background/              # Página principal do timeline
├── components/custom/
│   ├── Timeline/                # Navegação por anos (YearButton, BlackBorder)
│   ├── ContentArea/            # Exibição de conteúdo (ContentItem, ProjectList)
│   └── UserInfo/               # Perfil do usuário (Avatar, Social Links)
├── contexts/BackgroundContext  # Estado global (selectedYear, yearContents)
├── hooks/                      # 7 hooks customizados (todos com JSDoc)
└── background-data.ts          # Dados do usuário e conteúdo
```

## 🔑 Conceitos-Chave

### BackgroundContext (Estado Global)
```tsx
const {
  selectedYear,        // Ano selecionado
  setSelectedYear,     // Muda ano (reseta scroll)
  yearContents,        // Itens do ano atual (ordenados por mês)
  selectedContent,     // Item selecionado
  setSelectedContent,  // Atualiza seleção
  canGoNext,          // Pode ir para próximo?
  goToNextContent,    // Navega para próximo
} = useBackgroundContext();
```

### Hooks Principais
```tsx
// Responsividade (breakpoint: 769px)
const isDesktop = useMediaQuery("(min-width: 769px)");

// Gerenciar refs de lista
const [setRef, refs] = useContentItemRefs(items);

// Ativação por scroll (5px threshold)
useScrollActivation(refs, setSelectedContent);

// Padding dinâmico
const padding = useScrollPadding(refs, containerRef);

// Posição do indicador
const { translation, isVisible } = useTimelineBlackBorder(selectedYear, years);
```

## 📝 Padrões Comuns

### 1. Adicionar Conteúdo
```typescript
// src/background-data.ts
{
  id: "unique-id",
  year: 2024,
  month: 6,  // 1-12
  title: "Cargo",
  description: "Descrição",
  location: "Cidade, País",
  durationInMonths: 12,
  projects: [{ name: "Projeto", url: "https://..." }]
}
```

### 2. Criar Componente
```bash
mkdir -p src/components/custom/Nome
# Nome.tsx + nome.types.ts + nome.utils.ts
```

```tsx
"use client";  // Se usar hooks

/**
 * Descrição da função utilitária.
 * @param param - Descrição
 * @returns Descrição
 */
export function utilFunc(param: string): string {
  return param;
}

export function Component({ prop }: Props) {
  // hooks → estado → handlers → efeitos → render
}
```

### 3. Criar Hook
```tsx
"use client";

/**
 * Hook para [descrição].
 * @param param - Descrição
 * @returns Descrição
 * @example
 * const result = useHook(value);
 */
export function useHook(param: Type): ReturnType {
  // implementação com cleanup em useEffect
}
```

### 4. Responsividade
```tsx
// Opção 1: Componentes separados
{isDesktop ? <Desktop /> : <Mobile />}

// Opção 2: Classes condicionais
<div className="flex-col md:flex-row" />
```

## 🎨 Estilo e Cores

### 17 Cores Disponíveis
```
red, orange, amber, yellow, lime, green, emerald, teal, cyan,
sky, blue, indigo, violet, purple, fuchsia, pink, rose
```

### Uso
```tsx
<ContentItem color="blue" />  // border-l-blue-500, bg-blue-50, dark:bg-blue-950
```

### Utilitário cn()
```tsx
import { cn } from "@/lib/utils";
const classes = cn("base", isActive && "active", "override");
```

## 🔧 Comandos Essenciais

```bash
npm run dev          # Servidor dev
npm run build        # Build produção
npm run lint:fix     # Formatar código
```

## 🐛 Problemas Comuns (Top 10)

| Problema | Solução |
|----------|---------|
| Porta 3000 em uso | `PORT=3001 npm run dev` |
| Hot reload não funciona | Reiniciar dev server |
| Module not found | Verificar path alias `@/*` em tsconfig.json |
| Context error | Componente deve estar dentro do Provider |
| Tailwind não aplica | Reiniciar dev server |
| Dark mode não funciona | Verificar ThemeProvider com `attribute="class"` |
| Build falha | `rm -rf .next && npm run build` |
| Infinite re-render | Verificar deps do useEffect |
| TypeScript errors | Reiniciar TS server, verificar tipos |
| Stale closure | Usar useCallback com deps corretas |

## ⚡ Regras Críticas

### ✅ SEMPRE
- JSDoc em todos hooks e utils
- `"use client"` em componentes interativos
- Cleanup em useEffect (event listeners, observers)
- TypeScript types explícitos
- Testar mobile (≤769px) e desktop (≥769px)
- Formatar com `npm run lint:fix` antes de commit

### ❌ NUNCA
- Mutar state diretamente: `state.x = y` ❌ → `setState({ ...state, x: y })` ✅
- Esquecer deps no useEffect
- Deixar console.log no código
- Quebrar funcionalidade existente
- Usar hooks condicionalmente
- Chamar hooks fora de componentes/hooks

## 🏗️ Arquitetura Rápida

```
Interação do Usuário
    ↓
Event Handler
    ↓
Context Update (setSelectedYear/setSelectedContent)
    ↓
State Change
    ↓
Components Re-render (Timeline, ContentArea, UserInfo)
    ↓
UI Update
```

## 📊 Dados e Tipos

```typescript
interface Background {
  id: string;
  year: number;
  month?: number;
  title: string;
  description: string;
  location?: string;
  durationInMonths?: number;
  isCurrent?: boolean;
  projects?: Array<{ name: string; url: string }>;
  isInactive?: boolean;
}

interface UserInfo {
  name: string;
  lastName: string;
  profilePhotoUrl: string;
  urls: string[];
}
```

## 🔍 Detalhes de Implementação

### Scroll Activation
- Usa threshold de **5px** para detectar item ativo
- `Math.abs(rect.top - topThreshold) <= 5`

### Black Border
- Posição: `translateY(index * (48px + 8px))`
- 48px = altura do botão, 8px = gap

### Color Caching
- Cores atribuídas aleatoriamente mas cacheadas em context
- Evita repetir a mesma cor consecutivamente

### Ref Management
- `useContentItemRefs` cria callbacks estáveis para refs
- Evita recriação desnecessária

## 📚 Docs Completas (Quando Precisar)

Se precisar de detalhes completos:

- **ARCHITECTURE.md** - Diagramas de sistema, fluxo de dados
- **COMPONENT_REFERENCE.md** - API completa de todos componentes
- **HOOKS_REFERENCE.md** - API completa de todos hooks
- **DEVELOPMENT_GUIDE.md** - Workflows detalhados
- **TROUBLESHOOTING.md** - 40+ soluções de problemas

## 💡 Dicas Rápidas

**Performance**
```tsx
const value = useMemo(() => expensive(), [deps]);
const handler = useCallback(() => {}, [deps]);
```

**Debug**
```tsx
console.log({ selectedYear, yearContents });  // Remover antes de commit!
```

**Naming Convention**
```
Issue: [TURMA-00001] Título
Branch: feat/TURMA-00001
```

**Component Structure**
```
ComponentName/
├── ComponentName.tsx
├── component-name.types.ts
├── component-name.utils.ts (com JSDoc)
└── styles.css (opcional)
```

## 🎯 Workflow Rápido

1. **Criar issue** → Pegar número (#86)
2. **Criar branch** → `feat/TURMA-00086`
3. **Desenvolver** → Seguir padrões acima
4. **Testar** → Mobile + Desktop + Lint
5. **Commit** → `feat(scope): description`
6. **PR** → Título com [TURMA-00086]

## 🔐 Performance & Security

- Use `useCallback` para event handlers
- Use `useMemo` para cálculos caros
- Cleanup em useEffect
- CSS transforms (GPU) > top/left
- Não comitar secrets
- Não introduzir vulnerabilidades

---

**Última Atualização**: 2026-02-16  
**Versão Concisa**: Para agentes de IA que precisam de informação rápida e essencial

**💡 Para detalhes completos, consulte as docs específicas em `/docs`**
