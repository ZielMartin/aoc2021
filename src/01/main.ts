import * as fs from 'fs';
import * as readline from 'readline';

import { open } from 'fs/promises';

function createReadStream() {
	const fileStream = fs.createReadStream('./input.txt');
	

	return readline.createInterface({
		input: fileStream,
		crlfDelay: Infinity
	});
}

async function part1() {
	const rl = createReadStream();
	
	let prev = -1;
	let increases = -1;
	for await (const line of rl) {
		const n = Number.parseInt(line);
		n > prev && increases++;
		prev = n;
	}
	console.log(`Part 1 solution: ${increases}`);
}

async function part2() {
	const rl = createReadStream();
	let first, second, third;

	let previousReading = -1;
	let increases = -1;

	for await (const line of rl) {
		third = second;
		second = first;
		first = Number.parseInt(line);
		if(third != null) {
			const val = first + second + third;
			val > previousReading && increases++;
			previousReading = val;
		}	
	}
	console.log(`Part 2 solution: ${increases}`);
}


async function main() {
	await part1();
	await part2();
}

main();
