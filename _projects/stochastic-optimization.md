---
layout: page
title: Stochastic optimization in deep learning
description: Large-deviation analysis of SGD invariant measures and global convergence times.
importance: 1
category: research
---

All recent successes of deep learning share the same fundamental backbone: stochastic first-order optimization methods. Nonetheless, a principled understanding of how these methods behave when training modern deep models remains an open question, since they minimize objectives that are both complex and highly non-convex.

I developed a novel theoretical framework to tackle these challenges, focusing on stochastic gradient descent (SGD) and its long-run behavior on non-convex problems:

1. **Long-run distribution of SGD.** We provide the first complete characterization of SGD's invariant measures on non-convex problems. The long-run distribution takes the form of a Boltzmann–Gibbs law: the probability of SGD being close to critical points $$\mathcal{K}$$ is of the form

$$\exp\left(-\frac{V(\mathcal{K})}{\gamma}\right)$$

where $$V(\mathcal{K})$$ is an energy level determined by the objective and noise statistics, and $$\gamma$$ is the step-size. SGD concentrates exponentially around the minimum-energy state while visiting other regions with probabilities exponentially proportional to their energy levels ([ICML 2024](https://arxiv.org/abs/2406.09241), [poster](/assets/pdf/poster_icml24.pdf)).

2. **Global convergence time.** We quantify how long SGD takes to reach global minima, showing that the expected convergence time scales as

$$\exp\left(\frac{E(x)}{\gamma}\right)$$

where $$E(x)$$ is a geometric measure capturing both the loss landscape difficulty and noise statistics. This demonstrates that SGD's practical success stems from favorable loss geometry, particularly near initialization ([ICML 2025](https://arxiv.org/abs/2503.16398), [poster](/assets/pdf/poster_icml25.pdf)).

These results have been presented at the Thoth seminar ([slides](/assets/pdf/slides_retraite_thoth_2024.pdf)), the LPSM statistics seminar ([slides](/assets/pdf/slides_UParis_Oct_2024.pdf)), Université Côte d'Azur ([slides](/assets/pdf/slides_UNice_Dec_2024.pdf)), Morgan Stanley's ML Research seminar ([slides](/assets/pdf/slides_MS_Dec_2025.pdf)), and Inria's Argo team ([slides](/assets/pdf/slides_Argo_Dec_2025.pdf)).






## publications
<div class="publications">
{% bibliography --query @*[project=stochastic-optimization] --group_by none %}
</div>
