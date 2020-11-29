---
author:
- Martin Chapman
date: Wednesday 9th December 2020
title: "'Software Sustainability: If a tree falls in a forest\\...' -
  King's workshop prerequisites"
---

Overview
========

"If a tree falls in a forest, and no one is there to hear it, does it
make a sound?". This thought experiment suggests that something cannot
exist, if it exists in isolation. The same is true of research software,
which can only truly make an impact if it continues to be used over
time. We refer to software that is able to stand the test of time as
sustainable. In the development of research software, there are several
steps we can take to ensure our software is sustainable, and is still
used in 5, 10 or even 20 years from now. This course will explore these
steps, which include the use of Git, service-based architectures, and
Docker. In producing sustainable software, not only do we ensure the
longevity of our work, but we also ensure that our research is as open
as possible, and, critically, our results are reproducible.

Attendees at the workshop will build a novel piece of software,
incrementally improving its sustainability, until they develop a product
capable of existing within the workbenches of the next generation of
researchers.

Prerequisites
=============

Video course
------------

Prior to attending the session, attendees should have reviewed the
recorded video course on software sustainability.

**YouTube playlist link**:
<https://www.youtube.com/playlist?list=PLxyHJ_wep1_DPbvtFl_-EGyoz2pVt-n1_>

As the session will be entirely practical, this material will not be
presented in the session, and instead the attendees will complete tasks
based upon the recorded content. These tasks will be released shortly
before the session.

Installation
------------

### Direct

The following pieces of software should be installed prior to attending
the session, and preferably prior to engaging with the recorded
material. In order of importance:

1.  **Python 3** (<https://www.python.org/downloads/>)

    Confirm Python 3 is installed by issuing the command
    `python3 --version`{.bash} on a terminal.

2.  **nodejs** (<https://nodejs.org/en/download/>)

    Confirm nodejs is installed by issuing the command
    `node --version`{.bash} on a terminal

3.  **Git**
    (<https://git-scm.com/book/en/v2/Getting-Started-Installing-Git>)

    Confirm git is installed by issuing the command
    `git --version`{.bash} on a terminal.

4.  **Docker** (<https://docs.docker.com/get-docker/>)

    Confirm docker is installed, by running the command
    `docker run hello-world`{.bash} on a terminal.

5.  **Docker Compose** (<https://docs.docker.com/compose/install/>)

    Confirm Docker Compose is installed by running the command
    `docker-compose --version`{.bash}

It is recommended that all these tools are installed directly to the
attendees machine. Unfortunately, support with installation cannot be
provided during the workshop.

### Virtual Machine

If this installation process is not possible, a virtual machine image is
available
(<https://www.dropbox.com/s/p20rtne795yh3vb/sustainable.ova?dl=1>),
within which all the required software has been pre-installed. This
image can be run using software such as VirtualBox
(<https://www.virtualbox.org/wiki/Downloads>).

Slack
-----

Slack will be used for text communication during the workshop. Attendees
are also welcome to ask questions, such as regarding software
installation, prior to the session. Please sign up for the
'sustainability2020' workspace here, and ensure you have access on the
day of the workshop:
<https://join.slack.com/t/sustainability2020hq/signup>

Any issues with accessing these resources should be reported to
<martin.chapman@kcl.ac.uk>.

Workshop
========

The workshop itself will be streamed via YouTube, with breakout rooms to
receive support available via Teams. Links will be made available to
attendees before the session. The structure of the day will be as
follows:

       Time                Activity            Platform
  --------------- --------------------------- ----------
   10.00 - 10.10         Introduction          YouTube
   10.10 - 10.30   Coding practice: exercise    Teams
   10.30 - 10.50     Live coding solution      YouTube
   10.50 - 11.00             Break                \-
   11.00 - 11.25   Version control: exercise    Teams
   11.25 - 11.50     Live coding solution      YouTube
   11.50 - 12.00             Break                \-
   12.00 - 12.25       Testing: exercise        Teams
   12.25 - 12.50     Live coding solution      YouTube
   12.50 - 14.00             Lunch                \-
   14.00 - 14.25      Services: exercise        Teams
   14.25 - 14.50     Live coding solution      YouTube
   14.50 - 15.00             Break                \-
   15.00 - 15.25       Docker: exercise         Teams
   15.25 - 15.50     Live coding solution      YouTube
   15.50 - 16.00             Close             YouTube

The exercise to be completed on the day, which will include assessment
details, will also be made available to attendees prior to the session.
