---
layout: page
title: Last-iterate convergence of mirror methods
description: Determining how Bregman geometry impacts last-iterate guarantees in variational inequalities.
importance: 4
category: research
---

Multi-agent formulations have delivered critical advances across deep learning, from generative modeling to reinforcement learning, as well as robust optimization problems such as adversarial training. These successes have renewed interest in the behavior of first-order methods for solving differentiable multi-player games, which are notoriously more challenging than single-objective optimization.

We characterize the last-iterate convergence rate of mirror methods in variational inequalities as a function of the local geometry near the solution, both in deterministic ([to be published in SIOPT](https://arxiv.org/abs/2211.08043)) and stochastic settings ([COLT 21](https://arxiv.org/abs/2107.01906)). Our work shows how the design of the algorithm—regularization and step-size schedule—interacts with the geometry of constraints to determine convergence properties of these methods.

Talks: COLT 2021 ([slides](/assets/pdf/slides_colt.pdf), [poster](/assets/pdf/poster_colt.pdf)), ICCOPT 2022 ([slides](/assets/pdf/slides_iccopt.pdf)), and SMAI MODE 2024 ([slides](/assets/pdf/slides_smai_mode2024.pdf)).





## publications
<div class="publications">
{% bibliography --query @*[project=mirror-methods] --group_by none %}
</div>
