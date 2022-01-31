---
author:
- Martin Chapman
date: Wednesday 2nd February 2022
title: Software Sustainability - King's workshop prerequisites
---

# Overview

"If a tree falls in a forest, and no one is there to hear it, does it
make a sound?". This thought experiment suggests that something cannot
exist if it exists in isolation. The same is true of research software,
which can only truly make an impact if it continues to be used over
time. We refer to software that is able to stand the test of time as
sustainable. In the development of research software, there are several
steps we can take to ensure our software is sustainable, and is still
used in 5, 10 or even 20 years from now. This course explores these
steps, which include the use of Git, service-based architectures, and
Docker. In producing sustainable software, not only do we ensure the
longevity of our work, but we also ensure that our research is as open
as possible, and, critically, our results are reproducible.

Attendees at the workshop will build a novel piece of software,
incrementally improving its sustainability, until they develop a product
capable of existing within the workbenches of the next generation of
researchers.

# Prerequisites

## Video course

Prior to attending the workshop, attendees should have reviewed the
recorded video course on software sustainability.

**YouTube playlist link**:
<https://youtube.com/playlist?list=PLxyHJ_wep1_DPbvtFl_-EGyoz2pVt-n1_>

As the workshop will be entirely practical, this material will not be
presented, and instead the attendees will complete tasks based upon the
recorded content.

The exercise to be completed on the day, which will include an
assessment component, will also be made available to attendees prior to
the workshop.

## Installation

### Direct

The following pieces of software should be installed prior to attending
the workshop, and preferably prior to engaging with the recorded
material. In order of importance:

1.  **Python 3** (<https://www.python.org/downloads/>)

    Confirm Python 3 is installed by issuing the command
    `python3 --version`{.bash} on a terminal.

2.  **nodejs** (<https://nodejs.org/en/download/>)

    Confirm nodejs is installed by issuing the command
    `node --version`{.bash} on a terminal.

3.  **Git**
    (<https://git-scm.com/book/en/v2/Getting-Started-Installing-Git>)

    Confirm git is installed by issuing the command
    `git --version`{.bash} on a terminal.

4.  **Docker** (<https://docs.docker.com/get-docker/>)

    Confirm docker is installed by issuing the command
    `docker run hello-world`{.bash} on a terminal.

5.  **Docker Compose** (<https://docs.docker.com/compose/install/>)

    Confirm Docker Compose is installed by issuing the command
    `docker-compose --version`{.bash}

It is recommended that all these tools are installed directly to the
attendees machine. Unfortunately, support with installation cannot be
provided during the workshop.

### Virtual Machine

If this installation process is not possible, a virtual machine image is
available
(<https://www.dropbox.com/s/ho4vir303li1in0/sustainable.ova?dl=1>),
within which all the required software has been pre-installed.

This image can be run using software such as VirtualBox:
<https://www.virtualbox.org/wiki/Downloads>.

# Workshop

The workshop itself will be structured as a number of different
sessions, each of which will take place on Microsoft Teams. Teams links
will be made available to attendees in advance. Each session will relate
to one of the five topics covered in the course, and feature an exercise
on that topic:

     **Time**       **Activity**
  --------------- -----------------
   10.00 - 10.10   *Introduction*
   10.10 - 10.50   Coding practice
   10.50 - 11.00       *Break*
   11.00 - 11.50   Version control
   11.50 - 12.00       *Break*
   12.00 - 12.50       Testing
   12.50 - 14.00       *Lunch*
   14.00 - 14.50      Services
   14.50 - 15.00       *Break*
   15.00 - 15.50       Docker
   15.50 - 16.00       *Close*

## JupyterLab

In addition, each session will be split into two parts: first, attendees
will briefly review the exercise independently. Following this,
*JupyterLab* (with both a *Visual Studio Live Share* session and screen
sharing acting as backups) will be used to collaboratively develop a
solution.

As such, attendees should familiarise themselves with the Jupyter
development environment. A demo environment can be accessed here:
<https://jupyter.org/try>.

*As a backup, those attendees with access to a Windows environment
should download *Visual Studio Code* and install the *Live Share*
extension. Attendees using other operating systems should make sure they
can access, and familiarise themselves with, *Visual Studio Code for the
Web* before the session. Further details are available here:
<https://visualstudio.microsoft.com/services/live-share/>*

*As an additional backup, attendees should be prepared to share their
screens during the session.*

## Slack

In the event that there are issues accessing Teams, a Slack channel has
been created for this workshop so that communication can continue.
Please sign up for the 'sustainability2022' workspace here:
<https://join.slack.com/t/sustainability2022hq/signup>

Problems with any of the resources listed above should be reported to
Martin Chapman (martin.chapman\@kcl.ac.uk) prior to the workshop.
