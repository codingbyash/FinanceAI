import sys

def analyze_spending(total, income):
    # Financial advice logic
    if total > income * 0.7:
        return "You're spending too much. Consider cutting unnecessary expenses."
    else:
        return "Your spending is within a healthy range."

if __name__ == "__main__":
    total = float(sys.argv[1])
    income = float(sys.argv[2])
    result = analyze_spending(total, income)
    print(result)
