# ai-agent-ideas

<div align="center">

  <img src="https://github.com/davidwang960707-gpu.png" width="120" height="120" alt="王六 avatar" />

  <h3>AI Agent 需求与场景共创库</h3>

  <p>
    一个专门收集真实需求、业务场景、工作流痛点和 Agent 点子的开放仓库。
  </p>

  <p>
    <img src="https://img.shields.io/badge/AI%20Agent-Ideas-111827?style=for-the-badge&logo=openai&logoColor=white" alt="AI Agent Ideas" />
    <img src="https://img.shields.io/badge/Scenarios-Welcome-0EA5E9?style=for-the-badge&logo=githubissues&logoColor=white" alt="Scenarios Welcome" />
    <img src="https://img.shields.io/badge/Needs-Co--create-22C55E?style=for-the-badge&logo=gitbook&logoColor=white" alt="Co-create" />
  </p>

  <p>
    <a href="https://davidwang960707-gpu.github.io/ai-agent-ideas/">
      <img src="https://img.shields.io/badge/在线展示站-王六的%20AI%20Agent%20需求观察室-22D3EE?style=for-the-badge&logo=githubpages&logoColor=white" alt="在线展示站" />
    </a>
  </p>

</div>

---

## 这是什么

这里是一个 **AI Agent 需求收集站 + 场景观察室 + 产品灵感池**。

> 好的 Agent 产品，不是从“我会什么技术”开始的，  
> 而是从“你每天到底被什么事情折磨”开始的。

所以这个仓库不急着写代码。  
我们先收集真实问题、真实流程、真实吐槽、真实脑洞。

你可以把这里理解成：

- 一个 AI Agent 版许愿池
- 一个真实工作流样本库
- 一个产品经理、开发者、设计师、业务同学都能参与的共创空间
- 一个未来可能长出 Demo、MVP、开源项目和产品机会的地方

在这个仓库里，王六主要负责：

- 盯需求：把含糊的想法问清楚
- 拆场景：把一句吐槽拆成一个可分析的工作流
- 搞原型：把高价值需求变成 Demo 方向
- 做整理：把散落的点子变成可复用的场景库

## 你可以贡献什么

不用写代码也能贡献。真的。

你可以提交：

- **一个场景**：比如“销售每周整理客户跟进记录太痛苦”
- **一个需求**：比如“我想要一个能自动读会议纪要并生成行动项的 Agent”
- **一个工作流**：比如“从客户调研到方案 PPT 的完整流程”
- **一个反例**：比如“这个场景不适合 Agent，为什么”
- **一个脑洞**：比如“如果 Agent 能帮我盯竞品更新就好了”
- **一个行业样本**：教育、金融、医疗、制造、咨询、电商、HR、法务都可以

只要是真实的，就有价值。

## 如何开始贡献

最简单的方式：直接开一个 Issue。

| 你想提交 | 使用模板 | 适合内容 |
| --- | --- | --- |
| 真实业务场景 | 场景投稿 | 有背景、有流程、有痛点 |
| 明确产品需求 | 需求投稿 | 想让 Agent 完成某个任务 |
| 早期灵感脑洞 | 点子投稿 | 还没想清楚，但感觉有戏 |

你也可以直接提交 PR，把内容放进：

- `scenarios/`：真实场景
- `requirements/`：明确需求
- `ideas/`：早期想法

## 场景展示站

这个仓库不只是文档库，也有一个面向传播和浏览的静态展示页：

- 展示站链接：https://davidwang960707-gpu.github.io/ai-agent-ideas/
- `docs/`：GitHub Pages 静态站点
- `docs/data/cards.json`：场景卡片数据
- `docs/index.html`：王六的 AI Agent 需求观察室


## 一个好场景长什么样

不需要写得很正式，但最好说清楚这几件事：

```md
场景：销售同学每周整理客户跟进进展

背景：
销售每周要从聊天记录、会议纪要、CRM 里整理客户状态。

痛点：
信息散、耗时间、容易漏跟进事项。

理想 Agent：
自动读取相关信息，生成客户状态摘要、风险提醒和下一步行动建议。

输入：
聊天记录、会议纪要、CRM 字段、客户资料。

输出：
客户进展摘要、待办事项、风险等级、建议话术。

价值：
每周节省 2-3 小时，减少漏跟进。
```

## 我们会怎么处理这些内容

王六会定期把大家提交的内容整理成：

- 场景卡片
- Agent 需求文档
- Demo 原型方向
- 工作流拆解
- 行业案例合集
- 高价值 Agent 产品机会列表

高价值内容会被打上这些标签：

- `high-value`
- `real-pain`
- `agent-friendly`
- `needs-discussion`
- `demo-candidate`

## 贡献原则

- **真实优先**：真实吐槽胜过完美作文
- **场景优先**：先讲发生了什么，再讲想要什么功能
- **价值优先**：说清楚为什么值得做
- **粗糙也欢迎**：先扔进来，再一起打磨
- **保护隐私**：不要提交客户姓名、合同、账号、内部机密

## 仓库结构

```txt
.
├── README.md
├── CONTRIBUTING.md
├── scenarios/
│   ├── README.md
│   └── examples/
├── requirements/
│   ├── README.md
│   └── examples/
├── ideas/
│   ├── README.md
│   └── examples/
└── .github/
    └── ISSUE_TEMPLATE/
```

## 适合谁关注

- 想做 AI Agent 产品的人
- 正在找 Agent 创业方向的人
- 想把业务流程自动化的人
- 被重复劳动折磨的人
- 产品经理、开发者、设计师、售前、咨询顾问、运营同学
- 所有觉得“这玩意儿应该让 Agent 来干”的人

## 最后

如果你现在脑子里有一个场景，但还没想清楚怎么写，没关系。

先开 Issue，标题可以简单粗暴：

```txt
我想让 Agent 帮我整理客户会议
```


---

<div align="center">

  <b>AI Agent 监护人在线。欢迎投喂需求、场景、工作流和离谱但有用的想法。</b>

</div>
