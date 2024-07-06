import subprocess

def run_bash_command(command):
    try:
        # Run the command
        result = subprocess.run(command, shell=True, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        # Output the result
        print("Output:\n", result.stdout)
    except subprocess.CalledProcessError as e:
        print(f"Error running command '{command}': {e}")
        print(f"Command output: {e.output}")
        print(f"Command stderr: {e.stderr}")

def create_hugo_content(count):
    # Generate a list of Hugo new content commands
    commands = [f"hugo new sample-person-{i}" for i in range(1, count + 1)]
    for command in commands:
        # Run each command
        run_bash_command(command)

# Example usage: create 9 sample lists
create_hugo_content(9)
