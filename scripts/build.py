from shutil import rmtree
from os import system
from sys import path


def run():

    """
    Uses Poetry to build the code.
    """

    system("poetry build")


def test():
    path.insert(0, "cyclonedx/")
    system("poetry run python -m pytest -v --cov=cyclonedx/ tests/")


def package():

    """
    This method uses poetry to package the application and
    all of its dependencies into a zip file that can be used by
    AWS Lambda to urn the application.
    """

    system("poetry run pip install --upgrade -t tmp dist/*.whl")
    system("cd tmp; zip -r ../dist/lambda.zip . -x '*.pyc'")


def clean():

    """
    Removes unwanted junk from the project.  Maybe we should read
    .gitignore...?
    """

    for unwanted_dir in ["dist", "tmp", "cdk.out"]:
        try:
            rmtree(unwanted_dir)
        except OSError as e:
            print("Error: %s : %s" % (unwanted_dir, e.strerror))
