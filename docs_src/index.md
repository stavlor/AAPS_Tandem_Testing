# Tandem Mobi driver for AAPS

**Driver version:** {{ version }} (Phase 5 / Beta)

:::{danger}
**Important safety note.** This integration is in testing and is **not** approved for therapy.
Testing on living persons or animals is strictly forbidden. Test with a pump that is not
connected to anyone.
:::

% VERIFY: the README now says use of the driver is "at your own risk" instead of forbidding
% testing on people. Confirm which wording applies and update this banner.

The full pump documentation is on one page, laid out like the other pump pages in the
[AAPS documentation](https://androidaps.readthedocs.io/), so it can move there when the driver is
released: **[Tandem Mobi](CompatiblePumps/TandemMobi.md)**.

## Beta testing

While this implementation is already in the Beta phase, a few things still need to be done.
Everything that is missing is listed as a feature request, and all bugs found are listed there too.
You can find everything on the
[AAPS_Tandem_Testing issues page](https://github.com/andyrozman/AAPS_Tandem_Testing/issues).

If something doesn't work, check the issues page first. If you can't find it there, post a
message in the testing Discord channel **#t_mobi-test** so we can discuss whether it is a bug or
just how the implementation works. If we discover something new, we will add it as a bug.

The current plan is to finalize changes by the end of the year and then merge the driver into the
official AAPS repository, ready for the Christmas release or the nearest release after it.

:::{important}
Please read the whole [Tandem Mobi](CompatiblePumps/TandemMobi.md) page before you start testing.
It explains how the Mobi works and how this driver works, which will also help you decide how to
set up the pump. In some cases you may need to restart AAPS after setting up your pump for the
first time.
:::

```{toctree}
:maxdepth: 2
:caption: Pump

CompatiblePumps/TandemMobi
```

```{toctree}
:maxdepth: 2
:caption: Testers

testing/testing-guide
testing/phases
```

```{toctree}
:maxdepth: 1
:caption: Project

contributing/docs
archive/phase-1
```
