# Wedding Invitation

A simple wedding invitation built with Hugo and TailwindCSS

TODO: add quickstart

## Running site on local connection

```bash
cd frontend
```

```bash
hugo server --disableFastRender
```

```bash
hugo server --bind 0.0.0.0 --baseURL http://<YOUR_IP> --port 1313 --disableFastRender --gc
```

## How to generate invitation

TODO: update this

1. Navigate to front-end directory
   ```bash
   cd frontend
   ```
2. Fill `data/guest.txt` with guests name in each line
3. Run `main.py`

   ```bash
   python main.py
   ```

4. Content will be generated under `content/`.
5. Voila! You can share the link to your guests using

   ```html
   https://your-site.com/guest_name
   ```

## Running the Wishes API

1. Create `.env` file and

   ```bash
   SUPABASE_PASS=

   # Connect to Supabase via connection pooling with Supavisor.
   DATABASE_URL=

   # Direct connection to the database. Used for migrations.
   DIRECT_URL=
   ```
