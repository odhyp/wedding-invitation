import subprocess

INVITATION_PATH = 'data/invited.txt'


def run_bash_command(command: str):
    """Run command using bash.

    Args:
    - command (str): Command to run in bash
    """
    try:
        result = subprocess.run(command,
                                shell=True,
                                check=True,
                                stdout=subprocess.PIPE,
                                stderr=subprocess.PIPE,
                                text=True)
        print(f"Output: {result.stdout}")

    except subprocess.CalledProcessError as e:
        print(f"Error running command '{command}': {e}")
        print(f"Command output: {e.output}")
        print(f"Command stderr: {e.stderr}")


def run_hugo_new(param_title: str):
    """Return `hugo new` command.

    Args:
    - param_title (str): Page/content title
    """
    command = f"hugo new {param_title}"
    return run_bash_command(command)


def generate_sample(count: int):
    """Generate sample content with `n` amount. The output will be named 
    `sample-person-n`.

    Args:
    - count (int): The desired amount of generated content
    """
    for i in range(1, count + 1):
        param_title = f"sample-person-{i}"
        run_hugo_new(param_title)


def generate_slug(param_title: str):
    """Generate slug parameter for URLs.

    Args:
    - param_title (str): Page/content title
    """
    param_slug = param_title.replace(" ", "-")
    param_slug = param_slug.lower()
    return param_slug


def generate_content(invitation_path: str):
    """Generate content using `hugo new` command from invitation.txt file.
    
    Args:
    - invitation_path (str): The path to invitation.txt file
    """
    try:
        with open(invitation_path, 'r') as names:
            for name in names:
                param_title = name.strip()
                param_slug = generate_slug(param_title)
                run_hugo_new(param_slug)

    except FileNotFoundError:
        print("Invitation doesn't exist!")

    except Exception as e:
        print(f"An error occurred: {e}")


def main():
    generate_content(INVITATION_PATH)


if __name__ == '__main__':
    main()
