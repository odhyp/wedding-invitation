import os
from mdutils.mdutils import MdUtils


def create_sample():
    mdFile = MdUtils(file_name='content/sample-person-x/_index')

    LAYOUT_SINGLE = 'single'
    LAYOUT_DETAILS = 'layout'
    PAGE_TITLE = 'Sample Person X'
    PAGE_SLUG = 'sample-person-x'

    mdFile.new_paragraph("+++")
    mdFile.new_paragraph(f"layout = '{LAYOUT_SINGLE}'")
    mdFile.new_paragraph(f"title = '{PAGE_TITLE}'")
    mdFile.new_paragraph(f"slug = '{PAGE_SLUG}'")
    mdFile.new_paragraph("+++")
    mdFile.new_paragraph()

    mdFile.create_md_file()


def create_dir():
    parent_dir = "content"
    name_dir = "sample-person-x"
    result = os.path.join(parent_dir, name_dir)

    try:
        os.mkdir(result)
    except FileExistsError:
        print("File is exist")
    except Exception as e:
        raise
    else:
        pass
    finally:
        print("All folder is created")


def main():
    create_dir()
    create_sample()


if __name__ == '__main__':
    main()
