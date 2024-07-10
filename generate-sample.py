import subprocess

INVITATION_PATH = 'data/invited.txt'


def run_bash_command(command):
    try:
        # Run the command
        result = subprocess.run(command,
                                shell=True,
                                check=True,
                                stdout=subprocess.PIPE,
                                stderr=subprocess.PIPE,
                                text=True)
        # Output the result
        print(f"Output: {result.stdout}")

    except subprocess.CalledProcessError as e:
        print(f"Error running command '{command}': {e}")
        print(f"Command output: {e.output}")
        print(f"Command stderr: {e.stderr}")


def run_hugo_new(param_title):
    command = f"hugo new {param_title}"
    return run_bash_command(command)


def generate_sample(count):
    # Generate sample contents
    for i in range(1, count + 1):
        param_title = f"sample-person-{i}"
        run_hugo_new(param_title)


def generate_slug(param_title):
    param_slug = param_title.replace(" ", "-")
    param_slug = param_slug.lower()
    return param_slug


def generate_content(invitation_path):
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
