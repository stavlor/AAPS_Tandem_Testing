# Actions

Tap **Actions** at the bottom of the [Mobi overview](overview-tab.md) to open the **Actions**
screen. All the procedures on this page start from there.

:::{container} screens
```{figure} ../images/v4_insulin_start_before.jpg
Actions screen while insulin delivery is suspended.
```
```{figure} ../images/v4_insulin_stop_before.jpg
Actions screen while insulin is being delivered.
```
:::

The card at the top shows the cartridge level and whether insulin delivery is enabled or
suspended.

:::{important}
Before starting or stopping insulin, changing the cartridge, or filling the tubing or cannula,
acknowledge any active pump notifications (see [Notifications](data.md#notifications)). The Mobi
rejects these commands while an alarm is unacknowledged.
:::

## Starting and stopping insulin

To **resume** insulin delivery, tap **Start Insulin**, then **Resume insulin**.

To **stop** insulin delivery, tap **Stop Insulin**, then **Stop insulin**.

:::{container} screens
```{figure} ../images/v4_insulin_start.jpg
Resume insulin confirmation.
```
```{figure} ../images/v4_insulin_stop.jpg
Stop insulin confirmation.
```
:::

### Stopping a temp basal

You can't stop insulin while a temp basal is running. When one is running, the Actions screen
shows an extra **Stop Temp Rate** option with the active rate and time left.

1. Tap **Stop Temp Rate**.
2. The dialog shows the rate, duration and start time of the active temp basal. Tap
   **Stop Temp Rate** to cancel it, or **Cancel** to keep it running.
3. Tap **Stop Insulin**.

:::{container} screens
```{figure} ../images/v4_actions_tbr_running.jpg
Actions screen while a temp basal is running.
```
```{figure} ../images/v4_stop_temp_rate.jpg
Stop Temp Rate confirmation.
```
:::

## Cartridge and cannula setup

Tap **Cartridge/Cannula Setup** to open the setup screen.

:::{figure} ../images/v4_cartridge_setup.jpg
:class: screenshot
:align: right

Cartridge Setup screen. The check marks show which steps have been completed.
:::

From here you can:

- [Change the cartridge](#change-cartridge)
- [Fill the tubing](#fill-tubing)
- [Fill the cannula](#fill-cannula)
- [Set the site reminder](#site-reminder)

Insulin delivery must be stopped before changing the cartridge or filling the tubing.

```{raw} html
<div class="clear"></div>
```

### Change cartridge

1. Tap **Change Cartridge**. Disconnect the pump from your body or infusion site, then tap
   **Begin Change Cartridge**.
2. The cartridge unlocks. Remove the old cartridge, insert the new one, then tap
   **Cartridge Inserted**.
3. Wait while the pump finishes the cartridge change.
4. When the status shows **Cartridge change complete**, tap **Done**. You can now fill the
   tubing.

% SCREENSHOT: step 3 is missing (SCREENSHOTS.md: change_cart_step3).
:::{container} screens
```{figure} ../images/v4_change_cart_step1.jpg
Step 1: before you start.
```
```{figure} ../images/v4_change_cart_step2.jpg
Step 2: remove and insert the cartridge.
```
```{figure} ../images/v4_change_cart_step4.jpg
Step 4: cartridge change complete.
```
:::

### Fill tubing

:::{warning}
Disconnect the pump from your body or infusion site before filling the tubing.
:::

1. Tap **Fill Tubing**, then **Begin Fill Tubing**.
2. Hold down the pump button until insulin comes out of the end of the tubing, then release it.
   AAPS asks whether you can see insulin at the end of the tubing:
   - **Yes**: tap **Complete Fill**.
   - **No**: hold the pump button again to keep filling.
   - If holding the pump button doesn't move the motor, tap **Restart Fill**.
3. The pump finishes the fill; AAPS moves on automatically.
4. When the status says you can connect the infusion site, tap **Done**. You can now connect the
   site and fill the cannula.

% SCREENSHOT: step 3 is missing (SCREENSHOTS.md: filltubing_step3).
:::{container} screens
```{figure} ../images/v4_filltubing_step1.jpg
Step 1: before you start.
```
```{figure} ../images/v4_filltubing_step2a.jpg
Step 2: hold the pump button to fill.
```
```{figure} ../images/v4_filltubing_step2b.jpg
Step 2: button released, confirm the fill.
```
```{figure} ../images/v4_filltubing_step4.jpg
Step 4: fill complete.
```
:::

### Fill cannula

1. Tap **Fill Cannula**.
2. Enter the number of units needed for your cannula and tap **Fill Cannula**.

% SCREENSHOT: no screenshot of Fill Cannula yet (SCREENSHOTS.md: fill_cannula_*).

### Site reminder

Site reminders are kept in AAPS, not on the pump.

- Choose one of the presets, then tap **Apply Preset** to set the reminder date and time.
- You can also change the date and time manually, or apply a preset and then adjust it.
- If the date or time is shown in blue, you have unsaved changes: tap **Save**, or they will be
  lost.

% SCREENSHOT: site_reminder.jpg is pre-Compose UI (SCREENSHOTS.md: site_reminder).
:::{figure} ../images/site_reminder.jpg
:class: screenshot

Site Reminder screen.
:::

## Pump info

:::{figure} ../images/v4_pump_info.jpg
:class: screenshot
:align: right

Pump Info screen (serial numbers hidden).
:::

Tap **Pump Info** to see technical information about the pump: serial number, pump software
version, ARM software version, software part number, configuration bits, pump model, and PCBA
serial and revision. You may need it if you contact Tandem support about a problem.

At the bottom of the screen is **Debug Commands**.

% VERIFY: describe what Debug Commands does and who should use it.

```{raw} html
<div class="clear"></div>
```

:::{note}
When contacting Tandem support, don't mention AAPS or ControlX2: support staff won't know what
they are and may be less helpful. Using AAPS should not void your warranty, but Tandem wants you
to use their own software.
:::
