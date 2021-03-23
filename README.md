# wa-users-check

### What

Tool to verify the existence of a phone number on Whatsapp based on a list of numbers.

### How To Use

Install Dependencies:

```
yarn
```

Initiate login on Whatsapp:

```
yarn login
```

Create a list of numbers to auto check. (example inside ./numbers.txt)

```
yarn checkList PATH_TO_READ_NUMBERS PATH_TO_WRITE_RESULTS
```

Example (yarn checkList C://Users/currentUser/Desktop/numbers.txt C://Users/currentUser/Documents/results.txt)

***Note*** This modified version uses Brazil prefix(55) as default.

***Note*** Special thanks for [AbhishekBiswal](https://github.com/AbhishekBiswal) to release this repositiory faster on time that I used [him project](https://github.com/AbhishekBiswal/whatsapp-verify) as starter module.
