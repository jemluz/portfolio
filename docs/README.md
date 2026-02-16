# turma.dev Documentation

> **Documentação otimizada para agentes de IA - Acesso rápido e eficiente**

## ⚡ Comece Aqui (Recomendado para AI Agents)

**[AI Agent Essentials](./AI_AGENT_ESSENTIALS.md)** - **Documento PRINCIPAL para agentes de IA**
- ✅ Tudo essencial em ~400 linhas (~2.5k palavras)
- ✅ Informação concisa e acionável
- ✅ Padrões mais comuns
- ✅ Regras críticas
- ✅ Top 10 problemas
- ✅ Exemplos práticos

**💡 Use este documento primeiro. Só consulte as docs completas se precisar de detalhes específicos.**

---

## 📚 Documentação Completa (Opcional)

Use apenas quando precisar de informações detalhadas que não estão no Essentials:

### 🚀 Referências Rápidas

- **[Quick Reference](./QUICK_REFERENCE.md)** (295 linhas) - Comandos, patterns, troubleshooting rápido
- **[AI Agent Guide](./AI_AGENT_GUIDE.md)** (358 linhas) - Overview completo do projeto

### 📖 Deep Dive Documentation

**Use apenas quando precisar de detalhes não cobertos no Essentials:**

- **[Architecture](./ARCHITECTURE.md)** (595 linhas) - Diagramas, fluxo de dados, design patterns
- **[Component Reference](./COMPONENT_REFERENCE.md)** (544 linhas) - API completa de componentes
- **[Hooks Reference](./HOOKS_REFERENCE.md)** (693 linhas) - API completa de hooks
- **[Development Guide](./DEVELOPMENT_GUIDE.md)** (588 linhas) - Workflows detalhados
- **[Troubleshooting](./TROUBLESHOOTING.md)** (575 linhas) - 40+ soluções detalhadas

## 📊 Tamanho da Documentação

| Documento                  | Linhas | Palavras | Quando Usar                           |
| -------------------------- | ------ | -------- | ------------------------------------- |
| **AI_AGENT_ESSENTIALS.md** | **400**| **2,500**| **SEMPRE - Comece aqui** ⚡           |
| QUICK_REFERENCE.md         | 295    | 800      | Lookup rápido de comando/pattern      |
| AI_AGENT_GUIDE.md          | 358    | 1,539    | Overview geral do projeto             |
| ARCHITECTURE.md            | 595    | 1,613    | Mudanças arquiteturais                |
| COMPONENT_REFERENCE.md     | 544    | 1,720    | Trabalhando com componente específico |
| HOOKS_REFERENCE.md         | 693    | 2,134    | Trabalhando com hook específico       |
| DEVELOPMENT_GUIDE.md       | 588    | 1,998    | Processo de desenvolvimento           |
| TROUBLESHOOTING.md         | 575    | 2,005    | Debugando problema                    |
| **Total**                  | 4,619  | 12,573   | Documentação completa                 |

## 🎯 Abordagem em Camadas (Evita Sobrecarga)

```
Nível 1: AI_AGENT_ESSENTIALS.md (~400 linhas)
    ↓ (se precisar de mais)
Nível 2: QUICK_REFERENCE.md ou AI_AGENT_GUIDE.md
    ↓ (se precisar de API específica)
Nível 3: COMPONENT_REFERENCE.md ou HOOKS_REFERENCE.md
    ↓ (se precisar de troubleshooting detalhado)
Nível 4: TROUBLESHOOTING.md ou DEVELOPMENT_GUIDE.md
    ↓ (se precisar de arquitetura completa)
Nível 5: ARCHITECTURE.md
```

**💡 Recomendação para AI Agents**: Sempre comece com **AI_AGENT_ESSENTIALS.md**. Ele contém 90% do que você precisa. Só consulte docs completas para casos específicos.

## 🎯 Use Cases

### For AI Agents

Use this documentation to:

- ✅ Understand the codebase structure and architecture
- ✅ Find component and hook APIs
- ✅ Learn development patterns and conventions
- ✅ Troubleshoot common issues
- ✅ Make informed decisions about code changes
- ✅ Follow project standards consistently

### For Human Developers

Use this documentation to:

- ✅ Onboard to the project quickly
- ✅ Reference component and hook APIs
- ✅ Learn best practices and patterns
- ✅ Debug issues efficiently
- ✅ Contribute with confidence

## 📋 What's Covered

### Technical Overview

- **Framework**: Next.js 15 with Turbopack, React 19, TypeScript 5
- **Styling**: TailwindCSS v4, Radix UI components
- **State**: React Context API (BackgroundContext)
- **Theme**: next-themes with middleware persistence
- **Architecture**: Component-based, hook-driven logic

### Key Features Documented

1. **Timeline Navigation** - Interactive year selection and navigation
2. **Content Display** - Career history, projects, and details
3. **User Profile** - Avatar, name, social links
4. **Responsive Design** - Mobile/desktop layouts
5. **Theme System** - Light/dark mode support
6. **State Management** - Global context and local state
7. **Custom Hooks** - 7 custom hooks for complex logic
8. **Utility Functions** - Helper functions and utilities

## 🔍 Finding Information

### Quick Lookup

Need something fast? Check **[Quick Reference](./QUICK_REFERENCE.md)** for:

- Common commands
- File locations
- Essential hooks
- Common patterns
- Quick troubleshooting

### Understanding Concepts

Want to understand how things work? See:

- **[AI Agent Guide](./AI_AGENT_GUIDE.md)** - Overall concepts
- **[Architecture](./ARCHITECTURE.md)** - System design
- **[Development Guide](./DEVELOPMENT_GUIDE.md)** - Workflows

### API References

Looking for specific APIs? Check:

- **[Component Reference](./COMPONENT_REFERENCE.md)** - Component props and usage
- **[Hooks Reference](./HOOKS_REFERENCE.md)** - Hook signatures and examples

### Solving Problems

Encountering issues? See:

- **[Troubleshooting](./TROUBLESHOOTING.md)** - Common problems and solutions
- **[Development Guide](./DEVELOPMENT_GUIDE.md)** - Best practices

## 🎓 Learning Path

**Recommended order for new developers/agents:**

1. Read **QUICK_REFERENCE.md** - Get familiar with basics
2. Read **AI_AGENT_GUIDE.md** - Understand project overview
3. Skim **ARCHITECTURE.md** - Learn system design
4. Reference **COMPONENT_REFERENCE.md** - When working with components
5. Reference **HOOKS_REFERENCE.md** - When working with hooks
6. Use **DEVELOPMENT_GUIDE.md** - For workflow guidance
7. Keep **TROUBLESHOOTING.md** - Open for issues

## 📝 Documentation Standards

All documentation follows these standards:

- ✅ Clear, concise language
- ✅ Code examples with syntax highlighting
- ✅ Tables for reference data
- ✅ Diagrams for complex concepts
- ✅ Cross-references between documents
- ✅ Updated timestamps
- ✅ Practical examples
- ✅ Best practices highlighted

## 🔄 Keeping Documentation Updated

This documentation should be updated when:

- New features are added
- Architecture changes
- New patterns emerge
- Common issues are discovered
- APIs change
- Dependencies update

## 🆘 Getting Help

If the documentation doesn't answer your question:

1. Check all relevant docs in the index above
2. Search the GitHub issues
3. Review the source code with documentation context
4. Create a detailed issue with:
   - What you're trying to do
   - What documentation you checked
   - What's unclear or missing

## 📅 Last Updated

**Date**: 2026-02-16

**Maintained by**: AI Agents and developers working on turma.dev

---

**[Back to Main README](../README.md)**
