# Code Style for AI Agents - Decision Tree

---

### Modifying Existing Files

| Task | Guide to Read |
|------|--------------|
| **Adding imports** | [`conventions/imports.md`](code-style/conventions/imports.md) |
| **Deciding "use client"** | [`conventions/use-client.md`](code-style/conventions/use-client.md) |

---

## 🔄 Decision Trees

### Should I use "use client"?

```
START
│
├─ Uses hooks? (useState, useEffect, custom hooks) → YES: Add "use client"
├─ Uses next/navigation? (useRouter, etc) → YES: Add "use client"  
├─ Has event handlers? (onClick, etc) → YES: Add "use client"
├─ Uses browser APIs? (window, document) → YES: Add "use client"
└─ None of above → NO: Server component (no "use client")
```

**Full decision tree**: [`conventions/use-client.md`](code-style/conventions/use-client.md)



## 💡 Tips for AI Agents

1. **Load on demand**: Don't load all guides at once. Start with the decision tree, identify your task, then load specific guides.

2. **Use validation checklists**: After implementing, use ... to verify.

4. **Common pitfalls**:
   - ❌ Creating `.constants.ts` files → ✅ Use `.utils.ts` instead
   - ❌ Missing "use client" → ✅ Check decision tree
   - ❌ Missing JSDoc → ✅ Required for hooks and utils

6. **Critical Rule**: Never modify files in `src/components/ui/` (shadcn/ui managed components)
