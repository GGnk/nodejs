# CLI tool

To try this app you can clone this repo or download the folder (cli).

1.To clone this repo you need to pre installed git and enter the command below.

```bash
$ git clone https://github.com/ggnk/nodejs.git .
```
2. Open terminal (cmd or power shell), go to the any folder by command

```bash
$ cd cli
```

3.Put you file with text to encode into the folder (cli) then create new file to output encoded text

4.Open terminal(cmd or powershell) in this folder and install all modules dependencies by command (you need pre installed nodejs and npm):

```bash
$ npm install
```
5.Now you can run the script by command like this:

```bash
$ node index --action encode --shift 7 --input input.txt --output output.txt

$ node index -a encode -s 7 -i output.txt -o input.txt
```

## Command options

1. -s, --shift: a shift or key to cipher (the number from 1 to 25)
2. -i, --input: an input file name
3. -o, --output: an output file name
4. -a, --action: option to set action (encode/decode)
