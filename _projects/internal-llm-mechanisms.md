---
layout: page
title: Internal mechanisms of large language models
description: Understanding uncertainty estimates and in-context learning through targeted experiments.
importance: 2
category: research
---

Large language models have demonstrated remarkable capabilities, yet understanding the inner mechanisms that drive these capabilities remains challenging. My research aims to shed light on these mechanisms through both theoretical and empirical studies, with a focus on robustness to topic and distribution shifts.

**Robustness of uncertainty quantification methods for LLMs.** During my internship at [Apple Machine Learning Research](https://machinelearning.apple.com/) with Michael Kirchhof, Eugene Ndiaye, Louis Bethune, Michal Klein, Pierre Ablin and Marco Cuturi, we studied how uncertainty quantification methods for LLMs degrade when input text topics drift from training data. We demonstrated that this deterioration is inevitable and rooted in the geometric properties of the embedding space learned by the model, contributing to understanding current UQ method limitations and paving the way for more robust approaches like conformal prediction ([R2FM Workshop@ICML 2025](https://arxiv.org/pdf/2506.08572)).

**In-context learning capabilities of transformer models.** In-context learning (ICL) allows LLMs to learn new tasks from few examples in the input context, enabling foundation model use with minimal training data. However, the mechanisms driving these capabilities, especially on out-of-distribution data, remain unclear. While at [Morgan Stanley Machine Learning Research](https://www.morganstanley.com/about-us/technology/machine-learning-research-team), I collaborated with Ali Hasan to investigate how pretraining distribution influences ICL capabilities. We provided theoretical insights and empirical evidence highlighting the importance of pretraining data distribution shape in the model's ability to learn from context, especially under distribution shifts at inference time ([arXiv](https://arxiv.org/abs/2510.01163)).




## publications
<div class="publications">
{% bibliography --query @*[project=internal-llm-mechanisms] --group_by none %}
</div>
