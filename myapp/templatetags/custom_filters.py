from django import template
import re

register = template.Library()

@register.filter
def cut_domain(email):
    return re.split("@", email)[0]