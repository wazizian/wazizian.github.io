---
layout: page
permalink: /publications/
title: publications
description: Research highlights, grouped as in the legacy site, with links to papers and slides.
nav: true
nav_order: 2
---

## Stochastic optimization in deep learning

In this line of work, we focus on a simple yet fundamental question: what is the long-run behaviour of stochastic gradient descent (SGD) on non-convex objectives?
In the first part, we seek to describe the asymptotic distribution of SGD on general non-convex objectives.
Leveraging large deviation theory, we obtain a description of the invariant measure of SGD ([ICML 2024](https://arxiv.org/abs/2406.09241), [poster](/assets/pdf/poster_icml24.pdf)). This work was presented at [Thoth seminar](https://team.inria.fr/thoth/) ([slides](/assets/pdf/slides_retraite_thoth_2024.pdf)), at the [Séminaire de Statistique](https://www.lpsm.paris/seminaires/statp6p7/index) of the LPSM lab in Paris ([slides](/assets/pdf/slides_UParis_Oct_2024.pdf)) and at the [Séminaire de Probabilités et Statistiques](https://math.univ-cotedazur.fr/laboratoire/seminaires/s%C3%A9minaires-de-l%C3%A9quipe-probabilit%C3%A9s-statistiques) of the Nice University ([slides](/assets/pdf/slides_UNice_Dec_2024.pdf)).

In the second part, we focus on estimating the time it takes for SGD to reach the global minimum of a non-convex function. This reveals an intricate interplay between the loss landscape, the noise structure and the behavior of SGD ([ICML 2025](https://arxiv.org/abs/2503.16398), [poster](/assets/pdf/poster_icml25.pdf)).

I presented both of these works at the Morgan Stanley Machine Learning Research seminar in December 2025 ([slides](/assets/pdf/slides_MS_Dec_2025.pdf)) and at the seminar of the Argo Inria team in December 2025 ([slides](/assets/pdf/slides_Argo_Dec_2025.pdf)).

## Internal mechanisms of large language models

I had the chance of working with Michael Kirchhof, Eugene Ndiaye, Louis Bethune, Michal Klein, Pierre Ablin and Marco Cuturi while interning at [Apple Machine Learning Research](https://machinelearning.apple.com/). We investigate how uncertainty estimates for LLMs behave under distribution shifts ([R2FM Workshop@ICML 2025](https://arxiv.org/pdf/2506.08572)).
While working at [Morgan Stanley Machine Learning Research](https://www.morganstanley.com/about-us/technology/machine-learning-research-team), I had the pleasure of collaborating with Ali Hasan to better understand the emergence of in-context learning in transformers. In particular, we study how the different properties of the pretraining distribution impact the in-context learning capabilities of transformers ([arXiv](https://arxiv.org/abs/2510.01163)).

## Wasserstein distributionally robust optimization

Inspired by the success of entropic regularization in optimal transport, we study the regularization of WDRO ([ESAIM COCV](https://arxiv.org/abs/2205.08826)).
We also show that these estimators enjoy attractive generalization guarantees ([NeurIPS 23](https://arxiv.org/abs/2305.17076), [slides](/assets/pdf/slides_neurips_2023.pdf)).

I presented early versions of these works at [a workshop in Erice in May 2022](https://workshopsperice2022.github.io/), ([slides](/assets/pdf/slides_sicile.pdf)), and the second part at [FOCM 2023](https://focm2023.org/) in Paris, ([poster](/assets/pdf/poster_wdro.pdf)) as well at [Neurips@Paris 2023](https://neuripsinparis.github.io/neurips2023paris/) ([slides](/assets/pdf/slides_neurips_in_paris_2023.pdf)).

## Last-iterate convergence of mirror methods

We characterize the last iterate convergence rate of mirror methods in variational inequalities as a function of the local geometry of the Bregman divergence near the solution, both in the deterministic ([to be published in SIOPT](https://arxiv.org/abs/2211.08043)) and stochastic settings ([COLT 21](https://arxiv.org/abs/2107.01906)).

The latter was presented at COLT 21 ([slides](/assets/pdf/slides_colt.pdf), [poster](/assets/pdf/poster_colt.pdf)) and at ICCOPT 22 ([slides](/assets/pdf/slides_iccopt.pdf)) while the former was presented at SMAI MODE 2024 ([slides](/assets/pdf/slides_smai_mode2024.pdf)).

## Graph neural networks

With [Marc Lelarge](https://www.di.ens.fr/~lelarge/), we precisely describe the approximation capabilities of invariant and equivariant graph neural networks ([ICLR 21](https://arxiv.org/abs/2006.15646)). It was presented at a [MIPT-UGA workshop](https://sites.google.com/view/mipt-uga-ai-workshop/home) and at the Thoth team seminar ([slides](/assets/pdf/slides_gnn.pdf)).

## Smooth game optimization for Machine Learning

With [Gauthier Gidel](https://gauthiergidel.github.io/), [Ioannis Mitliagkas](https://mitliagkas.github.io/) and [Simon Lacoste-Julien](https://www.iro.umontreal.ca/~slacoste/), we propose a tight and unified analysis of gradient-based methods in games ([AISTATS 20](https://arxiv.org/abs/1906.05945), [slides](/assets/pdf/slides_aistats.pdf)) and leverage matrix iteration theory to study accelerated methods in games ([AISTATS 20](https://arxiv.org/abs/2001.00602)).

## Full bibliography

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>
