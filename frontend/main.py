"""
Module that generates invitation pages from data/guest.txt
"""

import os


def generate_invitation(guest_names_file, output_dir):
    os.makedirs(output_dir, exist_ok=True)

    with open(guest_names_file, "r", encoding="utf-8") as f:
        guest_names = f.readlines()

    # Process each guest
    for name in guest_names:
        name = name.strip()
        if not name:
            continue

        # Generate _index.md content
        index_content = f"""+++
layout = "wedding-landing"
title = "{name}"
+++
    """

        # Generate details.md content
        details_content = f"""+++
layout = "wedding-details"
title = "{name}"
+++
    """

        # Create the dir for each guests
        guest_dir = os.path.join(output_dir, name.replace(" ", "_"))
        os.makedirs(guest_dir, exist_ok=True)

        # Write _index.md content
        with open(
            os.path.join(guest_dir, "_index.md"), "w", encoding="utf-8"
        ) as index_file:
            index_file.write(index_content)

        # Write details.md content
        with open(
            os.path.join(guest_dir, "details.md"), "w", encoding="utf-8"
        ) as details_file:
            details_file.write(details_content)


def main():
    guest_names = "data/guest.txt"
    output_dir = "content/"

    generate_invitation(guest_names, output_dir)


if __name__ == "__main__":
    main()
