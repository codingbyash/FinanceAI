import pandas as pd

def preprocess_data(file_path):
    # Load data
    data = pd.read_csv(file_path)
    # Perform data cleaning and preprocessing
    # Example: data.dropna(inplace=True)
    return data