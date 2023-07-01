const defautCodeProvider = {
  cpp: `#include<iostream>
using namespace std;

int main() {

    cout<<"Hello";  
    
    return 0;
}
`,
  nodejs: `console.log("Hello World")`,
  java: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}`,
  python: `print("Hello World")`,
}

export default defautCodeProvider
