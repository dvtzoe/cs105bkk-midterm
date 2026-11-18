def order(item, qty=1, *extras, **options):
    print(item, qty, extras, options)

order("coffee")                      # default qty
order("coffee", 2, "sugar", "milk")  # *args
order("tea", size="L", hot=True)     # **kwargs
order(qty=3, item="water")           # keywords
