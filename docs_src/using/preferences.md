# Preferences

Tap the gear icon at the top right of the [Mobi overview](overview-tab.md). The settings are
grouped under **Mobi Pump Settings**.

:::{container} screens
```{figure} ../images/v4_preferences_top.jpg
Top of Mobi Pump Settings, with Use Shared Connection off.
```
```{figure} ../images/v4_preferences_bottom.jpg
Scrolled to the end.
```
:::

## Connection

Use Shared Connection
: Whether AAPS uses pairing data from ControlX2. When enabled, fill in
  **Shared Connection Data**. When disabled, pair from AAPS with the **Pump Pair** button on the
  [Mobi overview](overview-tab.md). See [Connection setup](../setup/connection.md).

Hide Pump Pair Button in Overview
: Pairing is only done once, so once the pump is paired you can hide the **Pump Pair** button on
  the overview.

## Limits

Set both limits with the slider or the **−** and **+** buttons.

Max Bolus on Pump
: The largest bolus, in units, that can be sent in a single request. This is not an hourly
  limit. Valid values are 1–25 U. If you need a bigger dose, give two boluses, waiting for the
  first to finish before starting the second.

Max Basal on Pump
: The highest basal rate, in U/h, the pump can be set to deliver. Valid values are 1–15 U/h.
  You can use the maximum, but to limit it, take your highest hourly basal rate and multiply it
  by 2.5. 250% is the highest temp basal the Mobi supports: with a base rate of 1 U/h, the pump
  will not accept temp rates above 2.5 U/h.

## Display

Display Driver Version
: Shows the driver version in section 1 of the [Mobi overview](overview-tab.md).

Which Pump Events to Show?
: Show all events, or only those relevant to AAPS. Some events reported by the pump matter very
  little to AAPS.

How many Pump Events to Show?
: Limit the number of pump events shown: the last 15 items, or the last 3, 6, 12 or 24 hours.

Show Cargo/Payload of Unknown Logs
: When unknown history logs are displayed, also show their raw payload (as hexadecimal).

## Pump behaviour

Auto confirm Low Basal Delivery Alert
: When the delivered basal drops below a certain percentage, the pump raises a special alert.
  When this option is on, those alerts are confirmed automatically.

% VERIFY: the old text gave the threshold as "less than 50% ??". Confirm the actual threshold.

Quick Bolus
: The pump button can deliver quick boluses. This sets the amount added per button press:
  0.5 U, 1 U, 2 U or 5 U, or enough to cover 2 g, 5 g, 10 g or 15 g of carbs.

  For example, with 0.5 U: hold the pump button until it vibrates or beeps, then press it four
  times for a 2 U bolus. The pump confirms the amount with the same number of beeps or
  vibrations; hold the button again to confirm the bolus.
