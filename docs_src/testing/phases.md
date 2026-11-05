# Development phases

Development is divided into five phases. After each phase there is a product that can be used
(not fully, but still usable). Detailed progress is tracked in the
[project view](https://github.com/users/andyrozman/projects/1/views/1).

Phase 1 started on 17 February 2025 and was completed on 4 April 2025.

**Phase 1.** Establish the driver framework, solve pairing and get communication running, and
implement basic commands: reading configuration and status (battery, remaining insulin), setting
the pump to non-Control-IQ mode, reading and setting the profile, reading and setting temp basals,
and some other settings. Pairing requires ControlX2. oref0 support only (temp basals only).

**Phase 2.** Pairing UI, cartridge change and cannula fill, and everything else needed to run the
pump fully from AAPS, built with Compose UI (this is the first AAPS driver to use Compose). Bolus
support (and oref1), and a first look at history and qualifying events (pump events).

**Phase 3.** Reading and parsing history into the AAPS database; investigating and handling
alerts and alarms (with database support); better display and storage of qualifying events; quick
bolus configuration; Pump Info UI.

**Phase 4.** Using the pump history for safety checks (for example, comparing treatments with
pump history records, and reporting to AAPS that delivery has stopped and when). Stabilization.

**Phase 5.** Release: merging into the AAPS `dev` branch and preparing documentation.

## Release notes

`tandem_0.4.26.1`
: Phase 1 release (completed).

% VERIFY: add tags released since Phase 1.

## Version history

0.1.x – 0.3.x
: Driver framework: refactoring what was prepared for the t:slim X2 and splitting it into two
  implementations.

0.4.x
: Phase 1 implementation.

0.9.x
: Phase 5 / Beta (current).
