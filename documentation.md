## Using If/Else Statements
- This method works well when the condition is more complex.

```mermaid
  graph TD
    A[Start Component] --> B{isLogged?}
    B -->|True| C[Render Welcome Message]
    B -->|False| D[Render Login Button]
    D -->|onClick| E[Set isLogged: true]
    E --> B
    C --> F[Component Rendered]

    style A fill:#e1f5fe,stroke:#039be5,color:#01579b
    style B fill:#ffecb3,stroke:#f9a825,color:#5d4037
    style C fill:#c8e6c9,stroke:#43a047,color:#1b5e20
    style D fill:#ffcdd2,stroke:#e53935,color:#b71c1c
    style E fill:#d1c4e9,stroke:#673ab7,color:#311b92
```
