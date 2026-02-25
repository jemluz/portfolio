# State Management

## Visão Geral

O gerenciamento de estado do **turma.dev** utiliza uma arquitetura híbrida que combina **React Context API** para estado global e **custom hooks** para lógica reutilizável e estado local. A abordagem prioriza simplicidade, performance e separação de responsabilidades.

## Arquitetura

```
┌───────────────────────────────────────────────────────────────────────┐
│                           App Layout                                  │
│  ┌─────────────────────────────────────────────────────────────────┐  │
│  │                      ThemeProvider                              │  │
│  │  ┌───────────────────────────────────────────────────────────┐  │  │
│  │  │              BackgroundProvider (Page)                    │  │  │
│  │  │  ┌──────────┐  ┌─────────────┐  ┌──────────────────┐      │  │  │
│  │  │  │ UserInfo │  │   Timeline  │  │   ContentArea    │      │  │  │
│  │  │  │          │  │             │  │                  │      │  │  │
│  │  │  │          │  │  + hooks    │  │  + hooks         │      │  │  │
│  │  │  │          │  │  + useState │  │  + useState      │      │  │  │
│  │  │  └──────────┘  └─────────────┘  └──────────────────┘      │  │  │
│  │  └───────────────────────────────────────────────────────────┘  │  │
│  └─────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────┘
```

## Camadas de Estado

### 1. Estado Global (Context API)

Gerencia estado compartilhado entre múltiplos componentes utilizando React Context API.

#### Contextos Ativos

| Contexto              | Escopo        | Responsabilidade                                        | Documentação                                      |
| --------------------- | ------------- | ------------------------------------------------------- | ------------------------------------------------- |
| `ThemeProvider`       | App-wide      | Gerencia tema (dark/light mode) via next-themes         | [theme-provider.tsx][theme-provider]              |
| `BackgroundProvider`  | `/background` | Coordena navegação, filtragem e cores do background     | [background-context.md][background-context]       |

[theme-provider]: /workspaces/turma.dev/src/components/theme-provider.tsx
[background-context]: /workspaces/turma.dev/src/contexts/background-context.md

#### Características dos Contextos

- **Imutabilidade**: Callbacks memoizados com `useCallback`
- **Performance**: Valores derivados com `useMemo` para evitar recálculos
- **Registros**: Pattern de callbacks registráveis para comunicação entre componentes (ex: `registerScrollReset`)
- **Type Safety**: TypeScript estrito em todos os contextos

### 2. Hooks Customizados

Encapsulam lógica reutilizável e complexa. Divididos em categorias:

Os hooks customizados são divididos em **hooks gerais** (como detecção de media queries) e **hooks específicos de página** (como os da página background, que gerenciam scroll, navegação na timeline e sincronização de UI).

**Documentação completa**: [hooks-summary.md][hooks-summary]

[hooks-summary]: /workspaces/turma.dev/src/hooks/hooks-summary.md

### 3. Estado Local (useState)

Componentes individuais utilizam `useState` para estado interno que não precisa ser compartilhado:
- Toggle de UI (dropdowns, tooltips)
- Estado de formulários
- Animações e transições locais

## Fluxo de Dados

### Exemplo: Background Page

```
User Action (scroll/click)
    ↓
Timeline Component
    ├─→ useTimelineNavigation (detecta mudança)
    ├─→ setSelectedYear (context action)
    ↓
BackgroundContext (state update)
    ├─→ yearContents (filtered data)
    ├─→ selectedContent (auto-select first)
    ├─→ registerScrollReset (callback)
    ↓
ContentArea Component
    ├─→ useScrollActivation (sync with scroll)
    ├─→ useContentItemRefs (track refs)
    └─→ Renders updated content
```

## Princípios de Design

1. **Single Source of Truth**: Estado compartilhado em contextos, derivações memoizadas
2. **Unidirectional Data Flow**: Dados fluem de cima para baixo via props/context
3. **Separation of Concerns**: Hooks isolam lógica, componentes focam em UI
4. **Performance First**: Memoização agressiva e refs para evitar re-renders
5. **Type Safety**: TypeScript garante contratos claros entre camadas

## Evolução Futura

Este documento é vivo e será atualizado conforme:
- Novas páginas forem implementadas
- Novos contextos globais forem criados
- Padrões de estado mais complexos emergirem (ex: state machines, external stores)
- Integrações com APIs externas forem adicionadas

---

**Última atualização**: Fevereiro 2026
