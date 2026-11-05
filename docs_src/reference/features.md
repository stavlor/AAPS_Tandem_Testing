# Implemented features

- **Settings**: read and set pump settings (disable Control-IQ, max bolus, max basal).
- **Battery status**.
- **Insulin level**.
- **Basal profile**: read and set. The Mobi supports only 16 time segments, so model your basal
  profile accordingly.
- **Temp basal**: read, set and cancel. This enables looping with oref0.
- **Bolus**: read and deliver. This enables looping with oref1 (SMB).
- **Time zone and daylight saving time changes** (not tested).
- **Qualifying events**: the pump sends events on certain actions. See
  [Data → Events](../using/data.md#events).
- **Alerts and alarms**: read on every pump status update (every 5 minutes) and shown in
  [Data → Notifications](../using/data.md#notifications).
- **Pump history**: see [Data → Pump History](../using/data.md#pump-history).
- **Pairing**: directly in AAPS, or through a shared connection with ControlX2.
- **Cartridge and cannula**: change cartridge, fill tubing, fill cannula, start and stop insulin.
  See [Actions](../using/actions.md).

% VERIFY: the last two bullets were not in the old list but are documented elsewhere on the old
% page. Confirm before publishing.
