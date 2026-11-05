# Testing guide

:::{danger}
The integration is **not** safe for non-testing use. Testing on living persons or animals is
strictly forbidden. Test with a pump that is not connected to anyone.
:::

## Prerequisites (one-time)

1. **ControlX2.** Download the latest release from the
   [ControlX2 releases page](https://github.com/jwoglom/controlX2/releases), install it, and pair
   it with your pump. See [Step 3: Pair the Mobi](#tandem-mobi-pairing).
2. **AAPS with the Mobi driver.** Clone the `andy_tandem` branch of
   [Andy's AndroidAPS repository](https://github.com/andyrozman/AndroidAPS) and build it in
   Android Studio:

   ```bash
   git clone https://github.com/andyrozman/AndroidAPS.git
   cd AndroidAPS
   git checkout andy_tandem
   ```

## Prepare AAPS (one-time)

1. Open the menu in the top-left corner, go to **Maintenance → Log Settings**, and enable the
   three pump log categories: **Pump**, **PumpBtComm** and **PumpComm**. You can disable most
   others, especially any that produce a lot of logs.
2. Advanced options only work after completing the objectives. If you have AAPS running
   elsewhere, you can export its settings and import them here, **but update or remove the
   Nightscout URL first**, or test data will go to that instance's Nightscout.
3. If you run into errors, post in the Discord channel first, so we avoid duplicates and reports
   about features that aren't developed yet.

## What to test from

You can test from a tag (when one is provided) or directly from the branch.

### Testing from a tag

Once enough work is done, tags are created for testing, each with a list of the features that are
*supposed* to be ready. If you find a problem when testing a tag, report it in Discord first; if
we agree it is a bug, open an issue on the
[AAPS_Tandem_Testing issues page](https://github.com/andyrozman/AAPS_Tandem_Testing/issues).

In your clone of the repository, create a branch from the tag:

```bash
# Create a branch from a tag
git checkout tags/<tag_name> -b <branch_name>

# For example
git checkout tags/tandem_0.4.26 -b tag_tandem_0.4.26
```

The branch name can be anything; the tag name must match exactly. See
[Release notes](phases.md#release-notes) for the available tags.

### Testing from the branch

If you feel adventurous you can test the `andy_tandem` branch directly. It changes a lot, so the
latest code may not be fully implemented or tested and could break your AAPS install. Mention any
problems in Discord, but don't open issues for them.

## Collecting logs

If something crashes, connect your phone to your computer and open the **Logcat** window in
Android Studio. There will be a lot of logs; filter them with `package:mine level:info` (leave out
`level:info` for more detail).

Useful strings to filter on:

`X2`
: All logs from the [PumpX2](https://github.com/jwoglom/pumpX2) library, which handles all
  Bluetooth communication with the Mobi.

`SENT-MESSAGE` / `PARSED-MESSAGE`
: Request messages sent to the pump, and response messages received from it.

When reporting a bug, include the driver version shown on the
[Mobi pump screen](#tandem-mobi-pump-screen) (enable
[Display Driver Version](#tandem-mobi-settings)).
