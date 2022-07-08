# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

p "Destroying old tasks"
Task.destroy_all
p "Creating new tasks"

# Sunday tasks
Task.create(completed: true, name: "Find some jobs on jobs.ie", date: "December 18 2022")
Task.create(completed: false, name: "Find some jobs on irishjobs.ie", date: "December 18 2022")
Task.create(completed: false, name: "Apply to Terraso", date: "December 18 2022")

# Monday tasks
Task.create(completed: false, name: "Apply to Sana", date: "December 19 2022")
Task.create(completed: true, name: "Send resume to Caleb Runyon of GT Independence", date: "December 19 2022")
Task.create(completed: false, name: "Talk to Matt Vasquez and Caitlin Studley", date: "December 19 2022")

# Tuesday tasks
Task.create(completed: false, name: "Email Chris Davidson with my resume, skill areas, growth areas", date: "December 20 2022")
Task.create(completed: true, name: "Message Anebi on Slack", date: "December 20 2022")
Task.create(completed: false, name: "Prep resume for UI Front End Developer at Apple and send to Nanette Weddell on LinkedIn", date: "December 20 2022")

# Wednesday tasks
Task.create(completed: true, name: "Order light sockets for Holly", date: "December 20 2022")
Task.create(completed: false, name: "Sign up for makerspace forums", date: "December 20 2022")
Task.create(completed: false, name: "On Urithuru, connect Hyper Backup to Backblaze", date: "December 20 2022")

p "Done."