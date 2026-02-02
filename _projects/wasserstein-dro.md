---
layout: page
title: Wasserstein distributionally robust optimization
description: Regularization schemes and generalization guarantees for Wasserstein DRO models.
importance: 3
category: research
---

Wasserstein Distributionally Robust Optimization (WDRO) has emerged as a powerful framework to design models robust to uncertainty in data distribution, addressing robustness and fairness in machine learning and operations research. Given n training samples, WDRO considers the worst-case expected loss over all distributions close to the empirical distribution in Wasserstein distance within a specified radius.

**Entropic regularization in WDRO.** Though WDRO has been successfully applied in various contexts, it remains computationally challenging and leads to poorly conditioned objectives. Inspired by the success of entropic regularization in optimal transport, we proposed regularizing the inner maximization problem of WDRO with an entropic penalty. This leads to a smoothed formulation that is easier to solve and use in wider machine learning contexts ([ESAIM COCV](https://arxiv.org/abs/2205.08826)).

**Generalization and robustness guarantees.** A key appeal of WDRO is its strong generalization guarantees: the WDRO objective provides an exact upper-bound on the true risk when samples are large enough. However, this approach suffers from the curse of dimensionality. We provided new generalization bounds for WDRO that don't suffer from this curse, showing that the WDRO training objective provides an exact upper-bound on the true risk with high probability for general model classes, even under distribution shifts at inference time, without sample complexity scaling exponentially with data dimension ([NeurIPS 2023](https://arxiv.org/abs/2305.17076), [slides](/assets/pdf/slides_neurips_2023.pdf)).

Early iterations were shared at the [Erice 2022 workshop](https://workshopsperice2022.github.io/) ([slides](/assets/pdf/slides_sicile.pdf)), then refined for [FOCM 2023](https://focm2023.org/) ([poster](/assets/pdf/poster_wdro.pdf)) and [NeurIPS@Paris 2023](https://neuripsinparis.github.io/neurips2023paris/) ([slides](/assets/pdf/slides_neurips_in_paris_2023.pdf)).
