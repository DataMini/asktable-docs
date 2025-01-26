# Python SDK Installation Guide

## Introduction

The AskTable Python SDK allows you to interact with the AskTable API through simple Python code. By using the Python SDK, you can easily query data sources, manage roles and policies, and perform other administrative tasks.

## Installation

### Additional References

- [Detailed Documentation for AskTable Python SDK](https://github.com/DataMini/asktable-python)
- [AskTable Python SDK PyPI Repository](https://pypi.org/project/asktable/)

### Environment Requirements

- Python Version: 3.9 or higher
- Dependency Library: `requests`

### Installation Steps

1. Ensure that you have installed `pip` (the package management tool for Python). If it is not installed, refer to the [official documentation](https://pip.pypa.io/en/stable/installation/) for installation instructions.

2. Use the following command to install the AskTable Python SDK:

    ```bash
    pip install asktable
    ```

3. Verify that the installation was successful:

    ```bash
    python -c "import asktable; print(asktable.__version__)" # Outputs version number
    ```

    If installed correctly, the version number of the SDK will be output.