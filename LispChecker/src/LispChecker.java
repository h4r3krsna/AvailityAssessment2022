import java.util.Scanner;
import java.io.File;
import java.nio.charset.StandardCharsets;
import java.io.IOException;
import java.util.List;
import java.util.ArrayList;

public class LispChecker {
	private static final boolean DEV = true;
	private static final String TEST_PATH = "sample.lisp";

	private static boolean checkBalance(String lispProgram) {
		int leftParenCount = 0;

		for (int i = 0; i < lispProgram.length(); i++) {
			char c = lispProgram.charAt(i);
			if (c == ';') // skip to next line
				while (lispProgram.charAt(++i) != '\n');
			if (c == '"') { // skip to next double quote
				while (lispProgram.charAt(++i) != '"' && lispProgram.charAt(i - 1) != '\\');
			}
			if (c == '(') {
				leftParenCount++;
			} else if (c == ')') {
				leftParenCount--;
			}
		}

		return leftParenCount == 0;
	}

	public static void main(String[] args) {
		String inputFilePath = null;
		if (args.length == 0) {
			if (DEV) {
				System.out.println(String.format("Using dev test input file ", TEST_PATH));
				inputFilePath = TEST_PATH;
			}
			else {
				System.out.println("Please provide a file path to a LISP program.");
			}
		}
		else {
			inputFilePath = args[0];
		}

		List<String> contents = new ArrayList<String>();
		try (Scanner s = new Scanner(new File(inputFilePath), String.valueOf(StandardCharsets.UTF_8))) {
			s.useDelimiter("\n");
			while (s.hasNext())
				contents.add(s.next().trim());

		} catch (IOException e) {
			e.printStackTrace();
		}

		boolean isBalancedProgram = checkBalance(String.join("\n",contents) + "\n");
		System.out.print(inputFilePath + " contains ");
		if (!isBalancedProgram) {
			System.out.print("un");
		}
		System.out.println("balanced parentheses.");
	}
}